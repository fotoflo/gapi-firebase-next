import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router";

import Head from "next/head";
import { Button } from "react-bootstrap";
import GithubLoginButton from "../components/GithubLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";

import Avatar from "../components/util/Avatar";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <>
      <p>Not signed in</p>
      <GithubLoginButton />
      {/* <GoogleLoginButton /> */}
    </>
  );
}
