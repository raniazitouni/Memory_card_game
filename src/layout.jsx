import { useEffect, useState } from "react";

const Layout = ({ children}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div className="overflow-hidden relative">
      {!isMobile && (
        <img
          src="/images/1.svg"
          alt="Corner 1"
          className="absolute lg:top-0 -top-11 lg:-left-6 lg:w-96 lg:h-36 md:w-60 md:h-44 object-contain"
        />
      )}
      {!isMobile && (
        <img
          src="/images/2.svg"
          alt="Corner 2"
          className=" absolute top-0 lg:right-0 -right-2  lg:w-60 lg:h-40 w-52 h-32 object-contain"
        />
      )}

      <div>
        <div className="">{children}</div>
      </div>

      {/* bottom left Corner */}
      {!isMobile && (
        <img
          src="/images/4.svg"
          alt="Corner 4"
          className="absolute xl:-bottom-3 lg:-bottom-9 -bottom-8 left-0 xl:w-[511px] xl:h-64 lg:w-96 lg:h-60 w-72 h-48 object-contain -z-10"
        />
      )}
      {isMobile && (
        <img
          src="/images/corner-mb1.svg"
          alt="Corner 4"
          className="absolute bottom-0 -left-1  w-28 h-36 object-contain -z-10"
        />
      )}
      <div className="flex justify-center items-end">
        <img
          src="/images/etic.svg"
          alt="etic logo "
          className="md:w-20 md:h-20 w-16 h-16 md:mt-0 mt-20 md:mb-0 mb-5 object-contain"
        />
      </div>

      {/* bottom right Corner */}
      {!isMobile && (
        <img
          src="/images/3.svg"
          alt="Corner 3"
          className="absolute right-0 -bottom-7  xl:w-[436px] xl:h-48 lg:w-96 lg:h-40 w-72 h-36 object-contain"
        />
      )}

      {isMobile && (
        <img
          src="/images/corner-mb-2.svg"
          alt="Corner 4"
          className="absolute bottom-0 right-0 w-28 h-36 object-contain -z-10"
        />
      )}
    </div>
  );
};

export default Layout;
