import { useState } from "react";
import Beat from "../components/Beat";
import Bar from "../components/Bar";
import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import Button from "../components/formElements/Button";

const BeatCheck = () => {
  const [alertMode, setAlertMode] = useState("safe");
  let message;

  if (alertMode === "safe") {
    message = "You're Good";
  }
  if (alertMode === "warning") {
    message = "Are you okay?";
  }
  if (alertMode === "danger") {
    message = "It looks like you are in Danger!!!";
  }

  return (
    <>
      <CustomHead />
      <div className="bg-main flex flex-col flex-1 h-screen justify-center items-center p-20 gap-4">
        <div className="flex gap-4 w-full">
          <Card className="flex justify-center items-center py-10 h-full w-full">
            <div className="flex flex-1 flex-col justify-center items-center w-full">
              <h3 className={`beat-text ${alertMode}`}>{message}</h3>
              <div className="flex flex-1 items-end my-10">
                <Bar alertMode={alertMode} />
              </div>
            </div>
          </Card>
          <Card className="flex justify-center items-center py-10 h-full w-full">
            <div className="flex flex-1 flex-col justify-center items-center w-full">
              <h3 className={`beat-text ${alertMode}`}>{message}</h3>
              <div className="flex flex-1 items-end my-10">
                <Beat height={500} width={500} alertMode={alertMode} />
              </div>
            </div>
          </Card>
        </div>
        <Card className="flex w-full flex-row">
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
        </Card>
      </div>
    </>
  );
};
export default BeatCheck;
