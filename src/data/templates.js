import template1 from "../assets/images/template1.jpg";
import dayNight from "../assets/images/template2.webp";
import template3 from "../assets/images/template3.webp";
import template4 from "../assets/images/template4.webp";
import template5 from "../assets/images/template5.webp";

const templates = [
  {
    id: 1,
    name: "La Maison Dorée",
    image: template1,
    component: "la-maison-doree",
  },
  {
    id: 2,
    name: "Day & Night",
    image: dayNight,
    component: "day-and-night",
  },
  {
    id: 3,
    name: "Bloom",
    image: template3,
    component: "bloom",
  },
  {
    id: 4,
    name: "Boho",
    image: template4,
    component: "boho",
  },
  {
    id: 5,
    name: "Royal",
    image: template5,
    component: "royal",
  },
];

export default templates;
