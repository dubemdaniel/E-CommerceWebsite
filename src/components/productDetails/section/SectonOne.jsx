import {
  faHeart,
  faRotate,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectonOne = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col  md:flex-col lg:flex-row gap-y-8 md:gap-y-5 lg:gap-x-5">
        <div className="w-full  flex flex-col gap-y-7  md:grid md:grid-cols-3 md:w-full md:gap-5 lg:w-[40%] lg:flex lg:flex-col lg:gap-y-7">
          <div className="bg-searchBg p-4">
            <img
              src="/images/product details/image 57.png"
              alt=""
              className="block m-auto"
            />
          </div>
          <div className="bg-searchBg   p-4">
            <img
              src="/images/product details/image 58.png"
              alt=""
              className="block m-auto"
            />
          </div>
          <div className="bg-searchBg  p-4">
            <img
              src="/images/product details/image 59.png"
              alt=""
              className="block m-auto"
            />
          </div>
          <div className="bg-searchBg p-4 ">
            <img
              src="/images/product details/image 61.png"
              alt=""
              className="block m-auto"
            />
          </div>
        </div>
        <div className="w-full bg-searchBg flex items-center justify-center">
          <img src="/images/product details/image 63.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-5 w-[80%]">
          <h1 className="font-bold">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center gap-x-3">
            <img src="/images/homepage/Four Star.png" alt="" />
            <p>(150 Reviews)</p>
            <p>|</p>
            <p className="text-secondaryGreen">In Stock</p>
          </div>
          <h2 className="font-medium">$192.00</h2>
          <p className="border-b-2  py-3">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <p className="flex items-center gap-x-4">
            Colours:
            <div className="flex items-center gap-x-2 ">
              <input
                type="radio"
                name="radio"
                id="radio"
                className="text-[#A0BCE0] outline-none border border-[#A0BCE0]"
              />
              <input
                type="radio"
                name="radio"
                id="radio"
                className="text-[#E07575] border-[#E07575] "
              />
            </div>
          </p>
          <div className="flex gap-x-3 items-center text-xs ">
            <p>Size:</p>
            <div className="flex gap-x-5">
              <button className="border p-2 rounded-md">xs</button>
              <button className="border p-2 rounded-md">s</button>
              <button className="border p-2 rounded-md bg-primary text-secondaryWhite">
                M
              </button>
              <button className="border p-2 rounded-md">L</button>
              <button className="border p-2 rounded-md">XL</button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row justify-between">
            <div className="flex w-[38%] rounded-md border">
              <button className="border px-3 text-2xl">-</button>
              <p className="px-10 border flex items-center justify-center">2</p>
              <button className="bg-primary text-secondaryWhite px-3 rounded-r-md ">
                +
              </button>
            </div>
            <div>
              <button className="bg-primary text-secondaryWhite px-10 rounded-md py-2">
                Buy Now
              </button>
            </div>
            <div>
              <button className="rounded-md p-2 border">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
          <div>
            <div className="border p-8">
              <div className="flex items-center gap-x-5 text-sm">
                <FontAwesomeIcon icon={faTruckFast} className="text-2xl" />
                <div>
                  <p>Free Delivery</p>
                  <p className="underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-8 flex items-center gap-x-5 text-sm">
              <FontAwesomeIcon icon={faRotate} className="text-2xl" />
              <div>
                <p>Return Delivery</p>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectonOne;
