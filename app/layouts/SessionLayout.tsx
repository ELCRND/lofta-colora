import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";
import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default async function SessionLayout({ children }: Props) {
  const session = await auth();
  // console.log(session);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
