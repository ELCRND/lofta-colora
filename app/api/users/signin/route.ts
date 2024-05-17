import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";

export async function POST(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json(
      {
        warningMessage: "Пользователя не существует",
      },
      {
        status: 400,
      }
    );
  }

  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json(
      {
        warningMessage: "Неправильный логин или пароль!",
      },
      {
        status: 400,
      }
    );
  }

  const tokens = generateTokens(reqBody.email, user.role);

  const response = NextResponse.json(tokens, { status: 200 });
  response.cookies.set("tokens", JSON.stringify(tokens), { httpOnly: true });

  return response;
}
