import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import Button from "../components/formElements/Button";
import Loader from "../components/Loader";

const Home = () => {
  const { status } = useSession();
  const [loading, setLoading] = useState(status === "loading");
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    else if (status !== "loading") setLoading(false);
  }, [status, router]);

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
        <Card>
          Home
          <Button onClick={signOut} />
        </Card>
      </div>
    </>
  );
};
export default Home;
