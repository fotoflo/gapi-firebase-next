import React from 'react'

import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

import { useSession, signOut } from "next-auth/react";

import GithubLoginButton from "../components/GithubLoginButton";
import GmailLoginButton from "../components/GmailLoginButton";

import Avatar from "../components/util/Avatar";
  
const Dashboard:React.FC = () => {
  
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/");
    },
  });

  if (status === "loading") {
    return <p>Loading...</p>
  }

  console.log("session",  session );

  return (
    <>
      <Avatar src={session.user.image} />

      <p>
        {session.user.name} Signed in as {session.user.email}
      </p>

      <div>
        <GmailLoginButton />
      </div>
      <br />
      <div>
        <GithubLoginButton />
      </div>
      <br />

      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  );
}

export default Dashboard