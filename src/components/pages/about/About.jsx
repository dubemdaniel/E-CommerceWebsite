import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { Navbar } from "../home/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[80%] lg:w-[90%]">
        <Navbar />
        <div className="py-20">
          <div className="flex flex-col items-center justify-center text-center gap-y-10 h-96 ">
            <h1 className="font-medium md:text-7xl lg:text-9xl">
              404 Not Found
            </h1>
            <p>Your visited page not found. You may go home page.</p>
            <button className="bg-primary px-14 py-4 text-secondaryWhite rounded-sm">
              Back to home page
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
