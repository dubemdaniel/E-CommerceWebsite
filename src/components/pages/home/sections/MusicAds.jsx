import jbl from "/images/homepage/Frame 694.png";

const MusicAds = () => {
  const items = [
    { name: "Hours", type: "23" },
    { name: "Days", type: "05" },
    { name: "Minutes", type: "59" },
    { name: "Seconds", type: "35" },
  ];
  return (
    <div className="py-10 items-center justify-center bg-footerCol  ">
      <div className="sm:flex w-[90%] md:w-[96%] lg:w-[90%] m-auto  justify-between">
        <div className="flex flex-col gap-6 md:gap-4 lg:gap-10 text-secondaryWhite w-full">
          <p className="text-secondaryGreen">Categories</p>
          <h1 className="lg:text-6xl">Enhance Your Music Experience</h1>
          <div className="flex md:gap-2 lg:gap-10">
            {items.map((item) => (
              <div
                key={item.name}
                className="rounded-full bg-secondaryWhite w-20 h-20 flex items-center justify-center text-center text-footerCol"
              >
                <div className="text-sm">
                  <p className="font-bold">{item.type}</p>
                  <h1>{item.name}</h1>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="text-xs px-8 py-3 bg-secondaryGreen rounded-sm">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="w-full radial-gradient rounded-full">
          <div className="">
            <img src={jbl} alt="jbl" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicAds;
