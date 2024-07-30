import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import {addItem} from "../../../../features/cart/CartSlice";

const items = [
  {
    id: "1",
    images: "/images/homepage/Frame 611.png",
    percent: "-40%",
    header: "HAVIT HV-G92 Gamepad",
    amount: "$120",
    price: "$160",
    rating: "/images/homepage/Five star.png",
    remaining: "(88)",
  },
  {
    id: "2",

    images: "/images/homepage/Frame 612.png",
    percent: "-35%",
    header: "AK-900 Wired Keyboard",
    amount: "$960",
    price: "$1160",
    rating: "/images/homepage/Four Star.png",
    remaining: "(75)",
    // cart: "cart",
  },
  {
    id: "3",

    images: "/images/homepage/Frame 613.png",
    percent: "-30%",
    header: "IPS LCD Gaming Monitor",
    amount: "$370",
    price: "$400",
    rating: "/images/homepage/Five star.png",
    remaining: "(99)",
    // padding: "padding",
  },
  {
    id: "4",

    images: "/images/homepage/Frame 614.png",
    percent: "-25%",
    header: "S-Series Comfort Chair",
    amount: "$375",
    price: "$400",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(99)",
  },
  {
    id: "5",

    images: "/images/homepage/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    percent: "-25%",
    header: "S-Series Comfort Chair",
    amount: "$375",
    price: "$400",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(99)",
    half: "half",
  },
];

const FlashSales = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    console.log("Adding item to cart" , item)

    dispatch(addItem({...item, quantity: 1}));
  };

  return (
    <div className="py-20">
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Today’s</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Flash Sales</h1>
          </div>
          <div className="flex gap-5 items-center">
            <div className="">
              <p className="text-xs">Days</p>
              <p className="font-bold sm:text-3xl">03</p>
            </div>
            <div className="text-primary sm:text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Hours</p>
              <p className="font-bold sm:text-3xl">23</p>
            </div>
            <div className="text-primary sm:text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Minutes</p>
              <p className="font-bold sm:text-3xl">19</p>
            </div>
            <div className="text-primary text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Seconds</p>
              <p className="font-bold sm:text-3xl">56</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-searchBg px-3 py-2 rounded-full text-center">
            <FontAwesomeIcon icon={faArrowLeft} className="text-center" />
          </div>
          <div className="bg-searchBg px-3 py-2   rounded-full text-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-center" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative group">
                <div className="bg-searchBg rounded-sm ">
                  <img
                    src={item.images}
                    alt=""
                    className={
                      item.padding
                        ? "p-9"
                        : "block m-auto p-6" && item.half
                        ? "p-5 m-auto"
                        : "block m-auto p-6"
                    }
                  />
                </div>
                <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                  <div className="flex justify-between">
                    <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                      <p className="">{item.percent}</p>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                    />
                  </div>
                </div>
                {item && (
                  <button
                    className="bg-[#58575779] text-secondaryWhite text-center rounded-sm w-full p-3 absolute bottom-0 hidden group-hover:block"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-semibold">{item.header}</p>
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
        <div className="py-10 m-auto">
          <button className="bg-primary px-9 text-sm py-3 rounded-md text-secondaryWhite block m-auto">
            View All Products
          </button>
        </div>
        <div className="py-10 border-b "></div>
      </div>
    </div>
  );
};

export default FlashSales;
