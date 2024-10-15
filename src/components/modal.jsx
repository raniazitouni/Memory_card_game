import { useEffect, useState } from "react";
const Modal = ({ score, onReplay }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div className="fixed  inset-0 flex justify-center items-center ">
      <div className="bg-white rounded-lg  shadow-lg p-8 max-w-sm w-96 border-[#009945] border-[3px] flex-col items-center text-center">
        <div className="relative flex justify-center w-1/2 mx-auto mt-4 mb-10">
          <img
            src="/images/Bleu_piece.svg"
            className=" w-5 h-5 absolute -top-2 -left-7"
          ></img>
          <div className="text-4xl font-atheletic  font-semibold ">
            Congratulations
          </div>
          <img
            src="/images/yallow_piece.svg"
            className=" w-7 h-7 absolute -bottom-3 -right-7"
          ></img>
        </div>
        <div className="text-4xl text-etic-bleu font-atheletic mb-4">
          YOUR SCORE IS&nbsp;:&nbsp;{score}
          {300}
        </div>
        <button className="mb-4" onClick={onReplay}>
          <div className="flex justify-center">
            {" "}
            <img src="/images/red-replay.svg" className=" w-9 h-9"></img>
            <span className="text-3xl text-etic-red font-atheletic">
              REPLAY
            </span>
          </div>
        </button>

        <div className="flex justify-center items-center">
          <img src="/images/etic.svg" className=" w-10 h-10"></img>
        </div>
      </div>
    </div>
  );
};

export default Modal;
