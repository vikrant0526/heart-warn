import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import LoginForm from "../components/forms/LoginForm";
import Loader from "../components/Loader";
import CustomHead from "../components/CustomHead";

const Login = () => {
  const { status } = useSession();
  const [loading, setLoading] = useState(status === "loading");
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
    else if (status !== "loading") setLoading(false);
  }, [loading, status, router]);

  if (loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader loading={true} />
      </div>
    );

  return (
    <>
      <CustomHead />
      <div className="bg-main flex flex-1 h-screen justify-center items-center p-4">
        <Card className="justify-center items-center py-10">
          <div className="flex flex-col md:flex-row justify-center items-center m-4">
            <Image src="/heart-warn-logo.png" width="120" height="100" alt="Met-Asia Logo" />
            <h2 className="text-3xl md:text-5xl font-bold m-2 ml-4">Heart Warn</h2>
          </div>
          <LoginForm />
        </Card>
      </div>
    </>
  );
};

export default Login;
