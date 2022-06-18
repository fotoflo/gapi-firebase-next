import { useSession, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import GithubLoginButton from "../components/GithubLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log({ session });
    return (
      <>
        <Image
          src={session.user.image}
          alt="user avatar"
          height="48px"
          width="48px"
        />

        <p>
          {session.user.name} Signed in as {session.user.email}
        </p>

        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in</p>
      <GithubLoginButton />
      {/* <GoogleLoginButton /> */}
    </>
  );
}
