import React from "react";

import { signIn } from "next-auth/react";

import { Button } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";

export default function GithubLoginButton() {
  return (
    <>
      <Button onClick={() => signIn("github")}><FaGithub/> Sign In with Github</Button>
    </>
  )
}