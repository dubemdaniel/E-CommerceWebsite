import mobile from "/images/homepage/hero_endframe__cvklg0xk3w6e_large 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <div className="border-t ">
      <div className="w-full px-4 m-auto  md:w-[100%] lg:w-[80%] md:flex gap-9">
        <div className="border-r lg:w-[20%]">
          <div className="w-48 mt-8">
            <div className="flex items-center pr-1 justify-between">
              <p>Woman’s Fashion</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="flex items-center pr-1 justify-between mt-3">
              <p>Men’s Fashion</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <p className="mt-3">Electronics</p>
            <p className="mt-3">Home & Lifestyle</p>
            <p className="mt-3">Medicine</p>
            <p className="mt-3">Sports & Outdoor</p>
            <p className="mt-3">Baby’s & Toys</p>
            <p className="mt-3">Groceries & Pets</p>
            <p className="mt-3">Health & Beauty</p>
          </div>
        </div>
        <div className="bg-footerCol lg:w-[80%] m-auto mt-8">
          <div className=" text-secondaryWhite lg:flex w-[85%] m-auto   items-start mt-10 justify-between ">
            <div className="pt-4 md:flex flex-col md:gap-5 w-full">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faApple} className="text-3xl" />
                <p className="text-xs">iPhone 14 Series</p>
              </div>
              <h1 className="md:text-4xl lg:text-6xl lg:pr-10">
                Up to 10% off Voucher
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-sm border-b ">Shop Now</p>

                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 w-full">
              <img src={mobile} alt="" className="" />
            </div>
          </div>
          <div className="text-slate-100 flex items-center gap-3 justify-center pb-9 md:pb-3">
            <div className="rounded-full bg-slate-400 h-3 w-3"></div>
            <div className="rounded-full bg-slate-400 h-3 w-3"></div>
            <div className="rounded-full bg-red-600 border border-secondaryWhite h-3 w-3"></div>
            <div className="rounded-full bg-slate-400 h-3 w-3"></div>
            <div className="rounded-full bg-slate-400 h-3 w-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
