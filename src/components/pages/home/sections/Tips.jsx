import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";
import { faShield } from "@fortawesome/free-solid-svg-icons/faShield";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons/faTruckFast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const items = [
  {
    title: "FREE AND FAST DELIVERY",
    text: "Free delivery for all orders over $140",
    icon: faTruckFast,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
    icon: faHeadphones,
  },
  {
    title: "MONEY BACK GUARANTEE",
    text: "We return money within 30 days",
    icon: faShield,
  },
];
const Tips = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col sm:flex-row gap-7 md:gap-x-10 justify-center lg:gap-x-20">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col text-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-circle bg-opacity-20 w-20 h-20 m-auto">
              <div className="w-16 h-16 flex items-center text-2xl justify-center rounded-full bg-footerCol text-secondaryWhite">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-xs">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
