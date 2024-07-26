import { useSession } from "next-auth/react";
import ConvexClientProvider from "../ConvexClientProvider";
import { auth } from "@/auth";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return <ConvexClientProvider session={session}>{children}</ConvexClientProvider>;
}
