import Lottie from "react-lottie";
import * as animationData from "./heart-loading.json";

const Loader = ({ height = 100, width = 100, loading }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return loading ? (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  ) : null;
};
export default Loader;
