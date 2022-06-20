import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";

import Button from "../formElements/Button";
import Seperator from "../Seperator";

function LoginForm() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-1 flex-col w-[90%] px-2 pb-4 mx-auto items-end">
          <h3 className="text-2xl font-bold py-3">Login</h3>
          <p className="font-semibold my-2">Login in and make wonderful things happen.</p>
          <Seperator />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Button
            onClick={() => signIn("google")}
            label={
              <span className="flex flex-1 justify-center items-center">
                <BsGoogle className="mr-4 text-3xl" />
                Sign in with Google
              </span>
            }
            className="w-[90%]"
          />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
