import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import Loader from "../components/Loader";
import PersonalInfoForm from "../components/forms/PersonalInfoFrom";

const Home = () => {
  const { status, data: userData } = useSession();
  const [loading, setLoading] = useState(status === "loading");
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      // } else if (userData) {
      //   if (userData.height && userData.weight && userData.gender && userData.activity)
      //     router.push("/beatCheck");
    } else if (status !== "loading") {
      setLoading(false);
    }
  }, [status, router, userData]);

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
            <h2 className="text-3xl md:text-5xl font-bold m-2 ml-4">Personal Information</h2>
          </div>
          <PersonalInfoForm />
        </Card>
      </div>
    </>
  );
};

export default Home;
