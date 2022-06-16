import React from "react";
import styles from "../styles/Home.module.css";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";

function GoogleLoginButton() {
  return (
    <>
      <h1 className={styles.title}>Welcome to NEXT JS</h1>
      <Button>
        <FaGoogle /> Login with Google
      </Button>
    </>
  );
}

export default GoogleLoginButton;
