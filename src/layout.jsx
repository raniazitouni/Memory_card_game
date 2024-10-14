
const Layout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen">
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0">
        <img src="/images/1.svg" alt="Corner 1" className="w-max h-max object-contain" />
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0">
        <img src="/images/2.svg" alt="Corner 2" className="w-max h-max object-contain" />
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0">
        <img src="/images/3.svg" alt="Corner 3" className="w-max h-max object-contain" />
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0">
        <img src="/images/4.svg" alt="Corner 4" className="w-max h-max object-contain" />
      </div>

      {/* Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src="/images/etic.svg" alt="Center Bottom" className="w-max h-max object-contain" />
      </div>

      {/* Main Content in the Center */}
      <div className="flex justify-center items-center h-200 w-200">
        {children}
      </div>
    </div>
  );
};

export default Layout;