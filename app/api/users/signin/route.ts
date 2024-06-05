import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

export async function POST(req: NextRequest) {
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

  const expires = new Date();
  const response = NextResponse.json(tokens, { status: 200 });
  // response.cookies.set(
  //   "session",
  //   JSON.stringify({
  //     status: "authenticated",
  //     user: { id: user._id, email: user.email },
  //     tokens,
  //   }),
  //   {
  //     httpOnly: true,
  //     expires: expires.getTime() + 60 * 5 * 1000,
  //   }
  // );
  // cookies().set(
  //   "session",
  //   JSON.stringify({
  //     status: "authenticated",
  //     user: { id: user._id, email: user.email },
  //     tokens,
  //   }),
  //   {
  //     httpOnly: true,
  //     expires: expires.getTime() + 60 * 10 * 1000,
  //   }
  // );

  return response;
}
