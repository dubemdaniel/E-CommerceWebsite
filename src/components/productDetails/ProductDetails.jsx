import Footer from "../footer/Footer";
import Header from "../header/Header";
import SectionTwo from "./section/SectionTwo";

import SectonOne from "./section/SectonOne";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
        <ul className="flex py-10 text-xs gap-x-5">
          <li>
            <a href="">Account</a>
          </li>
          <p>/</p>
          <li>
            <a href="">Game</a>
          </li>
          <p>/</p>
          <li>
            <a href="">Havic HV G-92 Gamepad</a>
          </li>
        </ul>
        <SectonOne />
        <SectionTwo />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
