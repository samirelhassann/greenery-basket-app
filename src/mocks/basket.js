import Broccoli from "../../assets/fruits/Broccoli.png";
import Cucumber from "../../assets/fruits/Cucumber.png";
import Potato from "../../assets/fruits/Potato.png";
import Pumpkin from "../../assets/fruits/Pumpkin.png";
import Tomato from "../../assets/fruits/Tomato.png";
import Logo from "../../assets/logo.png";

const basket = {
  top: {
    title: "Basket details",
  },
  details: {
    basketName: "Vegetables Basket",
    farmLogo: Logo,
    farmName: "Jenny Jack Farm",
    description:
      "Vegetables carefully selected especially for you. All items are properly evaluated after collection in order to be at our quality level.",
    price: "$40,00",
    buttonLabel: "Buy",
  },
  items: {
    title: "Basket items",
    list: [
      {
        name: "Tomato",
        image: Tomato,
      },
      {
        name: "Broccoli",
        image: Broccoli,
      },
      {
        name: "Potato",
        image: Potato,
      },
      {
        name: "Cucumber",
        image: Cucumber,
      },
      {
        name: "Pumpkin",
        image: Pumpkin,
      },
    ],
  },
};

export default basket;
