import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";
import styles from "../styles/Home.module.css";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function GithubLoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  )
}