import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  {
    id: 1,
    images: "/images/homepage/Frame 611.png",
    text: "HAVIT HV-G92 Gamepad",
    percent: "-40%",
    amount: "$120",
    price: "$160",
    rating: "/images/homepage/Five star.png",
    remaining: "(88)",
  },
  {
    id: 2,
    images: "/images/homepage/Frame 612.png",
    text: "AK-900 Wired Keyboard",
    percent: "-35%",
    amount: "$960",
    price: "$1160",
    rating: "/images/homepage/Four Star.png",
    remaining: "(75)",
    cart: "ss",
  },
  {
    id: 3,
    images: "/images/homepage/Frame 613.png",
    text: "IPS LCD Gaming Monitor",
    percent: "-30%",
    amount: "$370",
    price: "$400",
    rating: "/images/homepage/Five star.png",
    remaining: "(99)",
  },
  {
    id: 4,
    images: "/images/homepage/gammaxx-l240-argb-1-500x500 1.png",
    text: "RGB liquid CPU Cooler",
    amount: "$160",
    price: "$170",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(65)",
  },
];

const SectionTwo = () => {
  return (
    <div>
      <div className="flex py-20 gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Related Item</p>
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
                  {item.percent ? (
                    <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                      <p className="">{item.percent}</p>
                    </div>
                  ) : (
                    <div></div>
                  )}

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
              {item.cart ? (
                <button className="bg-footerCol text-secondaryWhite text-center rounded-sm w-full p-3  absolute bottom-0">
                  Add to Cart
                </button>
              ) : (
                ""
              )}
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
  );
};

export default SectionTwo;
