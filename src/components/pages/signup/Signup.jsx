import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { Navbar } from "../home/navbar/Navbar";
import CreatAccount from "./CreatAccount";

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%]">
        <Navbar />
      </div>
      <CreatAccount />
      <Footer />
    </div>
  );
};

export default Signup;
