import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const items = [
  {
    images: "/images/homepage/Frame 604.png",
    header: "Breed Dry Dog Food",
    amount: "$100",
    price: "$160",
    rating: "/images/homepage/Three Star.png",
    remaining: "(35)",
  },
  {
    images: "/images/homepage/Frame 604 (1).png",
    header: "CANON EOS DSLR Camera",
    amount: "$360",
    price: "$1160",
    rating: "/images/homepage/Four Star.png",
    remaining: "(95)",
    cart: "cart",
  },
  {
    images: "/images/homepage/ideapad-gaming-3i-01-500x500 1.png",
    header: "ASUS FHD Gaming Laptop",
    amount: "$700",
    price: "$400",
    rating: "/images/homepage/Five star.png",
    remaining: "(325)",
    padding: "padding",
  },
  {
    images: "/images/homepage/curology-j7pKVQrTUsM-unsplash 1.png",
    header: "Curology Product Set",
    amount: "$500",
    price: "$400",
    rating: "/images/homepage/Four Star.png",
    remaining: "(145)",
  },
  {
    images:
      "/images/homepage/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
    percent: "NEW",
    header: "Kids Electric Car",
    amount: "$960",
    price: "$400",
    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
    half: "half",
    checkbox: "check",
  },
  {
    images: "/images/homepage/Frame 608.png",
    header: "Jr. Zoom Soccer Cleats",
    amount: "$1160",
    price: "$400",
    rating: "/images/homepage/Five star.png",
    remaining: "(35)",
    half: "half",
    checkbox: "check",
  },
  {
    images: "/images/homepage/Frame 608 (1).png",
    percent: "NEW",
    header: "GP11 Shooter USB Gamepad",
    amount: "$660",
    price: "$400",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(55)",
    half: "half",
    checkbox: "check",
  },
  {
    images: "/images/homepage/Frame 608 (2).png",
    header: "Quilted Satin Jacket",
    amount: "$660",
    price: "$400",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(55)",
    half: "half",
    checkbox: "check",
  },
];
const ExploreOurProduct = () => {
  return (
    <div className="py-16">
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Our Products</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Explore Our Products</h1>
            <h1></h1>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-searchBg px-3 py-2 rounded-full text-center">
            <FontAwesomeIcon icon={faArrowLeft} className="text-center" />
          </button>
          <button className="bg-searchBg px-3 py-2   rounded-full text-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-center" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index}>
            <div className="relative ">
              <div className="bg-searchBg rounded-sm w-full md:w-full h-72 flex items-center justify-center">
                <img src={item.images} alt="" className="" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                />

                <div className="flex relative bottom-5">
                  {item.percent ? (
                    <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-secondaryGreen">
                      <p className="">{item.percent}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                  />
                </div>
              </div>
              {item.cart ? (
                <button className="bg-footerCol text-secondaryWhite text-center rounded-sm w-full p-2 absolute bottom-0">
                  Add to Cart
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">{item.header}</p>
              <div className="flex items-center  gap-2 text-sm">
                <p className="text-primary">{item.amount}</p>
                <img src={item.rating} alt="" />
                <p>{item.remaining}</p>
              </div>
              {item.checkbox ? (
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="checked"
                    id="check"
                    className="bg-footerCol"
                  />
                  <input
                    type="radio"
                    name="checked"
                    id="check"
                    className="bg-primary"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOurProduct;
