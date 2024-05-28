import { Db, MongoClient } from "mongodb";
import jwt, { VerifyErrors } from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getDbAndReqBody = async (
  clientPromise: Promise<MongoClient>,
  req: Request | null
) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

  if (req) {
    const reqBody = await req.json();
    return { db, reqBody };
  }

  return { db };
};

export const generateTokens = (email: string, role: string) => {
  const accessToken = jwt.sign(
    {
      email,
      role,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "10m",
    }
  );

  const refreshToken = jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    { expiresIn: "30d" }
  );

  return { accessToken, refreshToken };
};

export const createUserAndGenerateTokens = async (
  db: Db,
  reqBody: { email: string; password: string }
) => {
  const salt = bcrypt.genSaltSync(7);
  const hash = bcrypt.hashSync(reqBody.password, salt);

  await db.collection("users").insertOne({
    email: reqBody.email,
    password: hash,
    image: "",
    role: "user",
  });

  return generateTokens(reqBody.email, "user");
};

export const findUserByEmail = async (db: Db, email: string) =>
  db.collection("users").findOne({ email });

export const getProducts = async (db: Db) => {
  const accessories = await db.collection("paints").find().toArray();

  return accessories;
};