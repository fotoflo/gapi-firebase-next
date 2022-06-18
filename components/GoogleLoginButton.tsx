import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";

const GoogleLoginButton: React.FC = () => {
  return (
    <Button  onClick={() => signIn("google")}>
      <FaGoogle /> Login with Google
    </Button>
  );
}

export default GoogleLoginButton;