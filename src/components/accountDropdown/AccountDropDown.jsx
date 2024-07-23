import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons/faCircleXmark";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const accountitem = [
  { name: "Manage My Account", icon: faUser },
  { name: "My Order", icon: faBagShopping },
  { name: "My Cancellations", icon: faCircleXmark },
  { name: "My Reviews", icon: faStar },
  { name: "Logout" },
];

const AccountDropDown = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-gradient-to-r from-slate-500 to-linear text-secondaryWhite w-72 p-8  h-72 rounded-md">
        <ul className="flex flex-col gap-y-6">
          {accountitem.map((item, index) => (
            <li
              onClick={() => handleActive(index)}
              key={index}
              className={`flex items-center gap-x-6 ${
                index === activeIndex ? `border-2 p-2 rounded-md` : ""
              }`}
            >
              {item.icon ? (
                <FontAwesomeIcon icon={item.icon} />
              ) : (
                <i className="bx bx-log-out text-xl"></i>
              )}

              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountDropDown;
