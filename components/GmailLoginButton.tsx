import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { GOOGLE_GMAIL_AUTH_PARAMS } from "../config";

const GmailLoginButton: React.FC = () => {
  return (
    <Button onClick={() => signIn("gmail")}>
      <FaGoogle /> Login with Gmail
    </Button>
  );
}

export default GmailLoginButton;