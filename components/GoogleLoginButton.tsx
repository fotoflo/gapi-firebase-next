import React from "react";
import styles from "../styles/Home.module.css";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";

const GoogleLoginButton: React.FC = () => {
  return (
    <Button>
      <FaGoogle /> Login with Google
    </Button>
  );
}

export default GoogleLoginButton;
