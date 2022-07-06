import { useState } from "react";
import { useSession } from "next-auth/react";

import Button from "../formElements/Button";
import Select from "../formElements/Select";
import TextInput from "../formElements/TextInput";
import Seperator from "../Seperator";
import Loader from "../Loader";
import axios from "axios";
import { useRouter } from "next/router";

function PersonalInfoForm() {
  const { data: userData, status: userDataStatus } = useSession();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(null);
  const [activity, setActivity] = useState(null);

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!height) return alert("Please provide your height");
    if (!weight) return alert("Please provide your weight");
    if (!gender) return alert("Please provide your gender");
    if (!activity) return alert("Please provide your activity");

    const requestBody = { personalInformation: { height, weight, gender, activity } };
    axios
      .patch(`/api/users/${userData.id}`, requestBody)
      .then((data) => {
        console.log(data);
        router.push("/beatCheck");
      })
      .catch((error) => console.log(error));
  };

  if (userDataStatus === "loading") return <Loader />;

  return (
    <>
      <div className="w-full">
        <div className="flex flex-1 flex-col w-[90%] px-2 pb-4 mx-auto items-end">
          <p className="font-semibold my-2">Fill out your personal information to continue.</p>
          <Seperator />
        </div>
        <form className="flex flex-1 flex-col justify-center items-center" onSubmit={submitHandler}>
          <TextInput
            name="height"
            id="height"
            placeholder="Height"
            label="Height (in cm)"
            className="w-[90%]"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
          />
          <TextInput
            name="weight"
            id="weight"
            placeholder="Weight"
            label="Wight (in Kg)"
            className="w-[90%]"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
          />
          <Select
            name="gender"
            id="gender"
            options={genderOptions}
            label="Gender"
            className="w-[90%]"
            onChange={(e) => setGender(e.target.value)}
          />
          <Select
            name="activity"
            id="activity"
            options={activityOptions}
            label="How active are you?"
            className="w-[90%]"
            onChange={(e) => setActivity(e.target.value)}
          />
          <Button
            label={<span className="flex flex-1 justify-center items-center">Continue</span>}
            className="w-[90%]"
          />
        </form>
      </div>
    </>
  );
}

export default PersonalInfoForm;

const genderOptions = [
  { value: null, label: "Choose an option" },
  { value: "f", label: "Female" },
  { value: "m", label: "Male" },
  { value: "d", label: "Diversed" },
];

const activityOptions = [
  { value: null, label: "Choose an option" },
  { value: "a", label: "Athlete" },
  { value: "b", label: "Active (Gym/Work Out/Sprots)" },
  { value: "c", label: "Light Activity (Waking/Cycling)" },
  { value: "d", label: "Minimal Activity" },
  { value: "e", label: "No Activities" },
];
