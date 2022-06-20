import { useState } from "react";
import Beat from "../components/Beat";
import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import Button from "../components/formElements/Button";

const BeatCheck = () => {
  const [alertMode, setAlertMode] = useState("safe");
  return (
    <>
      <CustomHead />
      <div className="bg-main flex flex-1 h-screen justify-center items-center p-20">
        <Card className="flex justify-center items-center py-10 h-full w-full">
          <flex className="flex flex-1 justify-center items-center w-full">
            <Beat height={500} width={500} alertMode={alertMode} />
          </flex>
          <div className="flex w-full">
            <Button
              onClick={() => setAlertMode("safe")}
              label={<span className="flex flex-1 justify-center items-center">Simulation 1</span>}
              className="w-[90%]"
            />
            <Button
              onClick={() => setAlertMode("warning")}
              label={<span className="flex flex-1 justify-center items-center">Simulation 2</span>}
              className="w-[90%]"
            />
            <Button
              onClick={() => setAlertMode("danger")}
              label={<span className="flex flex-1 justify-center items-center">Simulation 3</span>}
              className="w-[90%]"
            />
          </div>
        </Card>
      </div>
    </>
  );
};
export default BeatCheck;
