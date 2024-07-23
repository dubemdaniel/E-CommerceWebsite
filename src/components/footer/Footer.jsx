import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qrcode from "/images/homepage/Qrcode 1.png";
import Playstore from "/images/homepage/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import Appstore from "/images/homepage/download-appstore.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-footerCol text-secondaryWhite mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-10 pb-20 w-full p-4 md:w-[100%] lg:w-[80%] m-auto gap-3">
        <div className="text-xs flex flex-col gap-5">
          <h1 className="text-lg ">Exclusive</h1>
          <h2>Subscribe</h2>
          <p>Get 10% off your first order</p>
          <form action="">
            <div className="relative w-48 md:w-48 rounded-lg border border-secondaryWhite px-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="outline-none border-0 bg-transparent w-full  p-2"
              />

              <FontAwesomeIcon
                icon={faPlay}
                className="absolute bottom-3 text-xl left-40"
              />
            </div>
          </form>
        </div>
        <div className="text-xs flex flex-col gap-5 lg:ml-10">
          <h1 className="text-lg">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-2 lg:ml-6">
          <h1>Account</h1>
          <ul className="text-xs flex flex-col gap-5">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Quick Link</h1>
          <ul className="text-xs flex flex-col gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1>Download App</h1>
          <p className="text-medium text-secondaryWhite">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-3">
            <div>
              <img src={Qrcode} alt="Qrcode" />
            </div>
            <div className="flex flex-col gap-3">
              <img src={Playstore} alt="Playstore" />
              <img src={Appstore} alt="" />
            </div>
          </div>
          <div className="flex text-secondaryWhite text-sm space-x-10">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-10 opacity-30">
        <p>&copy; Copyright Rimef 2022. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
