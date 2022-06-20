import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router";

import Head from "next/head";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Home: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <>
      <p>Not signed in</p>
      <GoogleLoginButton />
    </>
  );
}

export default Home
