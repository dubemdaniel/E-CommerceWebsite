import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../features/cart/CartSlice";

// const tableItems = [
//   {
//     image: "/images/homepage/Frame 613.png",
//     title: "LCD Monitor",
//     price: "$650",
//     quan: "01",
//     sub: "$650",
//   },
//   {
//     image: "/images/homepage/Frame 611.png",
//     title: "Hi Gamepad",
//     price: "$650",
//     quan: "02",
//     sub: "$1100",
//   },
// ];

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart items:", cartItems);

  const handleQuantityChange = (id, quantity) => {
    const newQuantity = parseInt(quantity, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

    const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.amount.replace('$', ''));
    return total + itemPrice * item.quantity;
  }, 0);


  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
        <div className="py-20">
          <p>Home / Cart</p>
        </div>
        {cartItems.length > 0 ? (
          <div>
            <div>
              <table className="min-w-full bg-white overflow-x-scroll ">
                <thead className="bg-white py-6 shadow-md rounded-md">
                  <tr className="flex bg-white py-6 px-10 w-full justify-between">
                    <th className="">Product</th>
                    <th className="">Price</th>
                    <th className="">Quantity</th>
                    <th className="">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartItems.map((item) => (
                    <>
                      <tr
                        key={item.id}
                        className="flex items-center bg-white mt-10 py-6 px-10 w-full justify-between shadow-md"
                      >
                        <td className=" flex items-center ">
                          <div className="relative">
                            <img src={item.images} alt="" className="w-12" />

                            <div className="absolute top-0 rounded-full">
                              <button onClick={() => handleRemoveItem(item.id)}>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  className="bg-primary text-secondaryWhite rounded-full text-small h-3 w-3 relative bottom-1"
                                />
                              </button>
                            </div>
                          </div>
                          <p className="text-xs">{item.title}</p>
                        </td>

                        <td className=" pr-[4rem]">{item.price}</td>
                        <td className=" pr-[4rem]">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-24 rounded-md"
                            min="1"
                            // max="10"
                            value={`0${item.quantity}`}
                            onChange={(e) => {
                              const value = Math.max(1, parseInt(e.target.value) || 0);
                              handleQuantityChange(item.id, value);
                            }
                            }
                          />
                        </td>
                        <td className="">${  parseFloat(item.price.replace('$',''))*item.quantity}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between py-10">
              <button className="px-14 py-4 border rounded-md ">
                Return To Shop
              </button>
              <button className="px-14 py-4 border rounded-md ">
                Update Cart
              </button>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-y-5 sm:gap-y-0">
              <div className="w-full flex flex-col sm:flex-row  gap-x-4 gap-y-4 sm:gap-y-0">
                <div className="md:w-[73%] md:py-5 lg:w-56 lg:py-0">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="py-3 rounded-md placeholder:px-3"
                    placeholder="Coupon Code "
                  />
                </div>
                <div>
                  <button className="px-10 py-4 bg-primary text-secondaryWhite rounded-md text-sm">
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-5 border-2 border-footerCol rounded-md px-4 py-7 w-full sm:w-[60%]">
                <h1 className="font-semibold">Cart Total</h1>
                <div className="flex justify-between border-b-2 py-2">
                  <p>Subtotal:</p>
                  <p>{subtotal}</p>
                </div>
                <div className="flex justify-between border-b-2 py-2">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between ">
                  <p>Total:</p>
                  <h3>
                    {" "}
                    $
                    {cartItems
                      .reduce(
                        (total, item) =>
                          total +
                          parseFloat(item.amount.slice(1)) * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </h3>
                </div>
                <button className="bg-primary text-secondaryWhite px-5 py-4 w-60 block m-auto rounded-md">
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p> Your Cart Is Empty</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
