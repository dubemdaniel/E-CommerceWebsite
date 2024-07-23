import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    id: 1,
    images:
      "/images/homepage/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
    text: "The north coat",
    amount: "$260",
    price: "$360",
    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
  },
  {
    id: 2,
    images: "/images/homepage/Frame 606.png",
    text: "Gucci duffle bag",
    amount: "$960",
    price: "$1160",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(65)",
  },
  {
    id: 3,
    images: "/images/homepage/gammaxx-l240-argb-1-500x500 1.png",
    text: "RGB liquid CPU Cooler",
    amount: "$160",
    price: "$170",
    rating: "/images/homepage/Four Half Star.png",
    remaining: "(65)",
  },
  {
    id: 4,
    images: "/images/homepage/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
    text: "Small BookSelf",
    amount: "$360",
    price: "",
    rating: "/images/homepage/Five star.png",
    remaining: "(65)",
  },
];

const BestSellingProduct = () => {
  return (
    <div className="py-14">
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">This Month</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Best Selling Products</h1>
            <h1></h1>
          </div>
        </div>
        <div className="">
          <button className="bg-primary px-8 py-3 rounded-sm text-secondaryWhite text-center text-xs">
            View All
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
                <div className="flex  items-center justify-end">
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

export default BestSellingProduct;
