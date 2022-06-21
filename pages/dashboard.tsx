import React, { useEffect, useState, FC } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

import { useSession, signOut } from "next-auth/react";

import GithubLoginButton from "../components/GithubLoginButton";
import GmailLoginButton from "../components/GmailLoginButton";

import Avatar from "../components/util/Avatar";
import { getDoc, doc } from "firebase/firestore";
import { firebaseComponents } from "../components/util/firebase";

const Dashboard: FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/");
    },
  });
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async (any: void) => {
      if (status !== "authenticated") return;

      const docRef = doc(firebaseComponents.db, `/users/${session.user.id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        const user = docSnap.data();
        console.log("user:", user);
        setUser({ user });
      }
    };

    fetchUser();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  console.log("session", session);
  console.log("status", status);

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
};

export default Dashboard;
