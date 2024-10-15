import { useEffect, useState } from "react";

const Layout = ({ children, moves }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div>
      {isMobile && (
        <div>
          {/* Top Div */}
          <div className="">
            <div className="text-center font-extrabold mt-[4%] font-atheletic  text-[8.1vw]  ">
              <img
                src="/images/bleu_lego_title.svg"
                alt="lego"
                className="w-[4.5vw] h-[4.5vw] absolute top-[2vw] left-[20.5vw] "
              />
              MEMORY CARD GAME
              <img
                src="/images/yellow-lego-title.svg"
                alt="lego"
                className="  w-[7vw] h-[7vw] absolute top-[11vw] right-[19.5vw]"
              />
            </div>
          </div>
          {/* Main Content in the Center */}
          <div>
            <div className="mt-3">{children}</div>
          </div>
          <div className="w-full h-[4vh]">

          </div>
          <div className=" w-full h-full flex justify-center">
            <div className=" w-1/3 justify-start">
              <img src="/images/mobile_bottom_left.svg" className=""></img>
            </div>

            <div className=" w-1/3 pt-[5vh] flex justify-center ">
              <img src="/images/etic.svg" className="w-[15vw]"></img>
            </div>

            <div className="w-1/3 flex justify-end items-end">
              <img src="/images/mobile_bottom_right.svg" className=""></img>
            </div>
          </div>
        </div>
      )}

      {/*---------------------------------------------- */}

      {!isMobile && (
        <div>
          {/* Top Left Corner */}
          <div className="inset-x-0">
            <img
              src="/images/1.svg"
              alt="Corner 1"
              className="w-auto h-auto object-contain"
            />
          </div>
          {/* Center Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="text-center font-bold md:text-4xl text-4xl md:py-11 py-8 relative">
              <img
                src="/images/bleu_lego_title.svg"
                alt="lego"
                className="md:w-6 md:h-7 w-4 h-5 object-conatain absolute md:top-4 md:-left-6 top-6 -left-3"
              />
              MEMORY CARD GAME
              <img
                src="/images/yellow-lego-title.svg"
                alt="lego"
                className="md:w-12 md:h-14 w-8 h-9 object-conatain absolute md:bottom-2 md:-right-8 bottom-3 -right-5"
              />
            </div>
          </div>
          {/* Top Right Corner */}
          <div className="absolute top-0 right-0 ">
            <img
              src="/images/2.svg"
              alt="Corner 2"
              className="w-auto h-auto object-contain"
            />
          </div>

          <div>
            {/* Main Content in the Center */}
            <div className="mb-4">{children}</div>
          </div>
          <div className="  flex justify-between items-end">
            {/* Bottom Left Corner */}

            <div className="w-1/3">
              {/* Bottom Right Corner */}
              <img
                src="/images/4.svg"
                alt="Corner 4"
                className="w-auto h-auto object-contain"
              />
            </div>
            <div className="object-center">
              {!isMobile && (
                <div className="flex flex-row w-1/3 justify-between gap-20 py-7 pr">
                  <button className="flex flex-row gap-1 text-etic-bleu font-atheletic text-3xl">
                    <img
                      src="/images/replay.svg"
                      alt="replay icon"
                      className="w-9 h-9 object-contain"
                    />
                    <p>REPLAY</p>
                  </button>
                  <div className=" text-etic-bleu font-atheletic text-3xl font-medium">
                    MOVES&nbsp;:&nbsp;{400}
                  </div>
                </div>
              )}
              <div className="ml-14">
                <img
                  src="/images/etic.svg"
                  alt="Center Bottom"
                  className="w-15 h-15 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 w-1/3 flex justify-end">
              <img
                src="/images/3.svg"
                alt="Corner 3"
                className="w-auto h-auto  object-contain"
              />
            </div>

            {/* Bottom Center */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
