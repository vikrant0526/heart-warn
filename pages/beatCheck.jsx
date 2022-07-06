import { useEffect, useState } from "react";
import axios from "axios";

import Beat from "../components/Beat";
import Bar from "../components/Bar";
import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import Button from "../components/formElements/Button";
import baseUrl from "../lib/baseUrl";

const BeatCheck = ({ simualtions }) => {
  const [alertMode, setAlertMode] = useState("");
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [i, setI] = useState(0);
  const message = getMessage(alertMode);

  useEffect(() => {
    setI(0);
  }, [selectedSimulation]);

  useEffect(() => {
    let timeOut;
    if (i < 120) {
      timeOut = setTimeout(() => setI((i) => i + 1), 1000);
      if (selectedSimulation)
        if (selectedSimulation[i] < 60 || selectedSimulation[i] > 110) setAlertMode("danger");
        else if (selectedSimulation[i] < 80 || selectedSimulation[i] > 100) setAlertMode("warning");
        else setAlertMode("safe");
    } else {
      setAlertMode("");
      setSelectedSimulation(null);
    }

    return () => clearTimeout(timeOut);
  }, [i]);

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
        <Card className="flex w-full">
          <h3 className={`text-6xl text-center mb-6 ${alertMode}`}>
            {selectedSimulation === null ? "Select a Simulation to run" : selectedSimulation[i]}
          </h3>
          <div className="flex flex-row w-full">
            <Button
              onClick={() => setSelectedSimulation(simualtions[0].BPMs)}
              label={<span className="flex flex-1 justify-center items-center">Simulation 1</span>}
              className="w-[90%]"
            />
            <Button
              onClick={() => setSelectedSimulation(simualtions[1].BPMs)}
              label={<span className="flex flex-1 justify-center items-center">Simulation 2</span>}
              className="w-[90%]"
            />
            <Button
              onClick={() => setSelectedSimulation(simualtions[2].BPMs)}
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

const getMessage = (alertMode) => {
  if (alertMode === "safe") {
    return "You're Good";
  }
  if (alertMode === "warning") {
    return "Are you okay?";
  }
  if (alertMode === "danger") {
    return "It looks like you are in Danger!!!";
  }
};

export const getServerSideProps = async () => {
  return axios
    .get(`${baseUrl}/simulations`)
    .then((simualtions) => {
      return {
        props: { simualtions: simualtions.data.simulations },
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        props: {},
      };
    });
};
