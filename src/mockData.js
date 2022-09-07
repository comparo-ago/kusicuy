//importar imagenes para los diferentes ambientes "bar", interiores, "patio cervecero", pileta, etc.
import bar from "./images/pexels-dmitry-zvolskiy-2253643.jpg";
import cabin from "./images/pexels-dan-hadley-5644485.jpg";

const mockData = [
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: cabin,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
    cat: "room",
    price: 7000,
    stock: 5,
    notAvailableStart: new Date(2022, 3, 10).getTime(),
    notAvailableEnd: new Date(2022, 3, 10).getTime(),
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
  {
    src: bar,
    title: "our cocktail bar",
    description:
      "bar con cocteleria de autor a cargo del sommelier Martin Sanchez",
  },
];
export const chips = [
  { key: 0, label: "Cancellation Flexibility" },
  { key: 1, label: "Standard rooms" },
  { key: 2, label: "Executive Rooms" },
  { key: 3, label: "Access to Lounge" },
  { key: 4, label: "More Filters" },
];
export default mockData;
