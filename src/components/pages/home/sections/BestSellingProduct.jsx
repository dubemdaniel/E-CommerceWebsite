import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../features/cart/CartSlice";



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

// const dispatch = useDispatch();

//   const addToCartHandler = (item) => {
//     console.log("Adding item to cart", item);

//     dispatch(addItem({ ...item, quantity: 1 }));
//   };

const BestSellingProduct = () => {
  return (
    <div className="py-14">
      <div className="flex items-center gap-3">
        <div className="w-8 h-16 rounded-md bg-primary "></div>
        <p className="font-semibold text-primary">This Month</p>
      </div>
      <div className="items-center justify-between py-10 sm:flex ">
        <div className="items-center gap-20 sm:flex">
          <div>
            <h1 className="font-semibold sm:text-3xl">Best Selling Products</h1>
            <h1></h1>
          </div>
        </div>
        <div className="">
          <button className="px-8 py-3 text-xs text-center rounded-sm bg-primary text-secondaryWhite">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="relative group">
              <div className="flex w-full rounded-sm bg-searchBg md:w-full h-60">
                <img src={item.images} alt="" className="block m-auto " />
              </div>
              <div className="absolute top-0 bottom-0 w-full px-3 py-2">
                <div className="flex items-center justify-end">
                  <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="flex px-2 py-1 mt-4 ml-auto rounded-full bg-secondaryWhite"
                  />
                </div>
              </div>
             
              {item && (
                  <button
                    className="bg-[#58575779] text-secondaryWhite text-center rounded-sm w-full p-3 absolute bottom-0 hidden group-hover:block"
                    // onClick={() => addToCartHandler(item)}
                  >
                    Add to Cart
                  </button>
                )}
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">{item.text}</p>
              <div className="flex gap-2">
                <p className="text-primary">{item.amount}</p>
                <p className="line-through text-footer">{item.price}</p>
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
