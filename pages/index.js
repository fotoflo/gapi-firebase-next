import { useSession, signOut } from "next-auth/react";

import Head from "next/head";
import { Button } from "react-bootstrap";
import GithubLoginButton from "../components/GithubLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";

import Avatar from "../components/util/Avatar";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log({ session });
    return (
      <>
        <Avatar src={session.user.image} />

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
