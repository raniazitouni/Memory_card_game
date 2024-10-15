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
    <div className="fixed inset-1 flex justify-center items-center ">
      <div className="flex justify-center  bg-white rounded-3xl shadow-lg  md:w-[718px] md:h-96 w-72 h-72 border-etic-green border-4  flex-col items-center text-center">
        <div className="text-center font-bold md:text-5xl text-2xl md:py-8 py-9 relative">
          <img
            src="/images/bleu_lego_title.svg"
            alt="lego"
            className="md:w-6 md:h-7 w-4 h-5 object-conatain absolute md:top-4 md:-left-6 top-6 -left-3"
          />
          Congratulations
          <img
            src="/images/yellow-lego-title.svg"
            alt="lego"
            className="md:w-12 md:h-14 w-8 h-9 object-conatain absolute md:bottom-2 md:-right-8 bottom-3 -right-5"
          />
        </div>
        <div className="md:text-4xl text-2xl text-etic-bleu font-atheletic md:my-4 my-0">
          YOUR SCORE IS&nbsp;:&nbsp;{score}
        </div>
        <button className="mb-4" onClick={onReplay}>
          <div className="flex justify-center md:my-4 my-2">
            {" "}
            <img src="/images/red-replay.svg" className=" md:w-9 md:h-9 w-7 h-7 object-contain"></img>
            <span className="md:text-4xl text-2xl text-etic-red font-atheletic">
              REPLAY
            </span>
          </div>
        </button>

        <div className="flex justify-center items-center">
          <img src="/images/etic.svg" className=" md:w-16 md:h-16 w-10 h-10 object-contain"></img>
        </div>
      </div>
    </div>
  );
};

export default Modal;
