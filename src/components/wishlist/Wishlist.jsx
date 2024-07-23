import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Navbar } from "../pages/home/navbar/Navbar";
import {
  faEye,
  faHeart,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const items = [
  {
    ind: 1,
    images: "/images/homepage/Frame 606.png",
    text: "Gucci duffle bag",
    amount: "$960",
    price: "$1160",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(65)",
  },
  {
    id: 2,
    images: "/images/homepage/gammaxx-l240-argb-1-500x500 1.png",
    text: "RGB liquid CPU Cooler",
    amount: "$1960",

    rating: "/images/homepage/Four Half Star.png",
    remaining: "(65)",
  },
  {
    id: 3,
    images: "/images/homepage/Frame 608 (1).png",
    percent: "NEW",
    text: "GP11 Shooter USB Gamepad",
    amount: "$550",

    rating: "/images/homepage/Four Half Star.png",
    remaining: "(55)",
    half: "half",
    checkbox: "check",
  },

  {
    id: 4,
    images: "/images/homepage/Frame 608 (2).png",
    text: "Quilted Satin Jacket",
    amount: "$750",

    rating: "/images/homepage/Four Half Star.png",
    remaining: "(55)",
    half: "half",
    checkbox: "check",
  },
];
const items2 = [
  {
    ind: 1,
    images: "/images/homepage/ideapad-gaming-3i-01-500x500 1.png",
    text: "ASUS FHD Gaming Laptop",
    amount: "$960",
    price: "$1160",
    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
    padding: "padding",
  },
  {
    images: "/images/homepage/Frame 613.png",
    percent: "-30%",
    text: "IPS LCD Gaming Monitor",
    amount: "$1160",

    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
    padding: "padding",
  },
  {
    images: "/images/homepage/Frame 611.png",
    percent: "-40%",
    text: "HAVIT HV-G92 Gamepad",
    amount: "$560",
    new: "New",
    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
  },
  {
    images: "/images/homepage/Frame 612.png",
    percent: "-35%",
    text: "AK-900 Wired Keyboard",
    amount: "$200",

    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
    cart: "cart",
  },
];
const Wishlist = () => {
  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%]">
        <Navbar />
        <div className="py-16">
          <div className="flex items-center justify-between ">
            <p>Wishlist (4)</p>
            <button className="border px-14 py-4 rounded-sm">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative ">
                <div className="bg-searchBg rounded-sm flex w-full md:w-full h-60">
                  <img src={item.images} alt="" className="block m-auto " />
                </div>
                <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                  <div className="flex  items-center justify-between">
                    {item.ind ? (
                      <div className="bg-primary text-secondaryWhite rounded-sm px-3 text-xs py-1">
                        -35%
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                </div>
                <button className="absolute text-sm  bottom-0 w-full text-secondaryWhite py-1 bg-footerCol">
                  <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-semibold">{item.text}</p>
                <div className="flex gap-2">
                  <p className="text-primary">{item.amount}</p>
                  <p className="text-footer  line-through">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex py-14 justify-between items-center ">
          <div className="sm:flex items-center gap-20">
            <div className="flex  gap-3 items-center">
              <div className="h-16 bg-primary w-8 rounded-md "></div>
              <p className=" font-semibold">Just For You</p>
            </div>
          </div>
          <div className="">
            <button className="border px-8 py-3 rounded-sm text-footerCol text-center text-xs">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {items2.map((item, index) => (
            <div key={index}>
              <div className="relative ">
                <div className="bg-searchBg rounded-sm flex w-full md:w-full h-60">
                  <img src={item.images} alt="" className="block m-auto " />
                </div>
                <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                  <div className="flex  items-center justify-between">
                    {item.ind ? (
                      <div className="bg-primary text-secondaryWhite rounded-sm px-3 text-xs py-1">
                        -35%
                      </div>
                    ) : <div></div> && item.new ? (
                      <div className="bg-secondaryGreen text-secondaryWhite rounded-sm px-3 text-xs py-1">
                        NEW
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  </div>
                </div>
                <button className="absolute text-sm  bottom-0 w-full text-secondaryWhite py-1 bg-footerCol">
                  <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-semibold">{item.text}</p>
                <div className="flex gap-2">
                  <p className="text-primary">{item.amount}</p>
                  <p className="text-footer  line-through">{item.price}</p>
                </div>
                <div className="flex items-center">
                  <img src={item.rating} alt="" />
                  <p>{item.remaining}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
