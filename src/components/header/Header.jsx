import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="bg-footerCol p-4">
      <div className="w-[90%]">
        <div className=" w-[100%] text-small  md:w-[100%] lg:w-[66%] md:text-sm flex items-center  text-secondaryWhite lg:ml-auto justify-between">
          <p className="md:text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>
              <a href="">ShopNow</a>
            </span>
          </p>
          <div className="flex space-x-2 items-center">
            <p className="md:text-sm">English</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
