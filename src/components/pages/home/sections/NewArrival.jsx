const NewArrival = () => {
  return (
    <div>
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Featured</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">New Arrival</h1>
            <h1></h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5  w-full  sm:gap-5 sm:flex sm:flex-row   justify-between">
        <div className="relative bg-footerCol w-full ">
          <img
            src="/images/homepage/ps5-slim-goedkope-playstation_large 1.png"
            alt=""
            className="h-full"
          />
          <div className="absolute flex flex-col bottom-0 top-40 text-xs lg:text-lg md:top-60 md:text-sm lg:top-80 lg:gap-y-10 text-secondaryWhite p-1 lg:p-7">
            <h1 className="font-bold">PlayStation 5</h1>
            <p className="lg:pr-60">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p>
              <a href="" className="border-b ">
                Shop Now
              </a>
            </p>
          </div>
        </div>
        <div className=" w-full">
          <div className="relative">
            <img
              src="/images/homepage/attractive-woman-wearing-hat-posing-black-background 1.png"
              alt=""
              className="w-full"
            />
            <div className="absolute flex flex-col md:text-sm bottom-20 lg:text-lg md:top-32 lg:top-44 lg:gap-y-4 text-secondaryWhite md:px-2 p-2 lg:p-7 ">
              <h1 className="font-bold">Women’s Collections</h1>
              <p className="md:pr-40 text-xs lg:pr-60">
                Featured woman collections that give you another vibe.
              </p>
              <p>
                <a href="" className="border-b ">
                  Shop Now
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-5 mt-4">
            <div className="bg-footerCol w-full flex justify-center relative p-4 ">
              <img
                src="/images/homepage/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                alt=""
              />

              <div className="absolute flex flex-col text-xs  md:top-20 p-2 md:p-2 md:text-xs lg:text-lg bottom-10 lg:top-32 text-secondaryWhite ">
                <h1 className="font-bold">Speakers</h1>
                <p className="">Amazon wireless speakers</p>
                <p className="mt-3 ">
                  <a href="" className="border-b ">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-footerCol w-full flex justify-center p-4 relative">
              <img
                src="/images/homepage/652e82cd70aa6522dd785109a455904c.png"
                alt=""
              />
              <div className="absolute flex flex-col text-xs  md:top-20 p-2 md:text-xs lg:text-lg md:p-2 bottom-10 lg:top-32 text-secondaryWhite ">
                <h1 className="font-bold">Perfume</h1>
                <p className="">GUCCI INTENSE OUD EDP</p>
                <p className="mt-3 ">
                  <a href="" className="border-b ">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
