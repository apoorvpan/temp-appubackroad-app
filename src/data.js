import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "https://appu-ghar.vercel.app/", text: "Projects" },
];
export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/apoorvpan",
    icon: "fab fa-facebook",
  },
  { id: 2, href: "https://twitter.com/apoorvpan0912", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "https://www.linkedin.com/in/apoorvprakash912/",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Find out how much it will cost to get there and how much money you’re likely to need on a weekly basis (taking into account local transportation, accommodation, food & drink and leisure expenses). ",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Endless tour and travels is one of the poineer adventure travel company and well established trekking company in the valley of himalayas,and is recognized by government and department of tourism.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Comfort Travels Experiential Travel is a product which will give you a life time experience, be it with your friends, solo-trips, couple tour or other.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2023",
    title: "Spiti Valey",
    info: ` Spiti (pronounced as Piti in Bhoti language) is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The middle land" and the valleys of several rivers that feed into the Spiti River.`,
    location: "Himachal Pradesh",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2022",
    title: "Panjim",
    info: `Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations.`,
    location: "Goa",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2023",
    title: "Mumbai",
    info: ` Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. `,
    location: "Maharashtra",
    duration: 8,
    cost: 3000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2021",
    title: "Nainital",
    info: ` Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore.`,
    location: "Uttrakhand",
    duration: 20,
    cost: 3300,
  },
];
