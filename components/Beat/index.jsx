import Lottie from "react-lottie";
import * as SafeBeat from "./SafeBeat.json";
import * as WarningBeat from "./WarningBeat.json";
import * as DangerBeat from "./DangerBeat.json";

const Beat = ({ alertMode, height, width }) => {
  const safeBeatOptions = {
    loop: true,
    autoplay: true,
    animationData: SafeBeat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const warningBeatOptions = {
    loop: true,
    autoplay: true,
    animationData: WarningBeat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dangerBeatOptions = {
    loop: true,
    autoplay: true,
    animationData: DangerBeat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (alertMode === "safe")
    return <Lottie options={safeBeatOptions} height={height} width={width} />;
  if (alertMode === "warning")
    return <Lottie options={warningBeatOptions} height={height} width={width} />;
  if (alertMode === "danger")
    return <Lottie options={dangerBeatOptions} height={height} width={width} />;
};
export default Beat;
