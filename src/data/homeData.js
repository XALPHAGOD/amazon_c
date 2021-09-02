const carouselData = [
  {
    id: 1,
    url: `./images/home_carousel/home1.jpg`,
  },
  {
    id: 2,
    url: `./images/home_carousel/home2.jpg`,
  },
  {
    id: 3,
    url: `./images/home_carousel/home3.jpg`,
  },
  {
    id: 4,
    url: `./images/home_carousel/home4.jpg`,
  },
  {
    id: 5,
    url: `./images/home_carousel/home5.jpg`,
  },
  {
    id: 6,
    url: `./images/home_carousel/home6.jpg`,
  },
];
const cardData = [
  {
    type: 1,
    title: `Amazon Basics`,
    url: `./images/category_1/categ1.jpg`,
    link_text: `See more`,
    link: "/mobiles",
  },
  {
    type: 1,
    title: `Get fit at home`,
    url: `./images/category_1/categ2.jpg`,
    link_text: `Explore now#`,
    link: "#",
  },
  {
    type: 1,
    title: `Computer & Accessories`,
    url: `./images/category_1/categ3.jpg`,
    link_text: `Shop now`,
    link: "/accessories",
    data_path: "/data/comp_accs.json",
  },
  {
    type: 1,
    title: `Oculus`,
    url: `./images/category_1/categ4.jpg`,
    link_text: `Shop now#`,
    link: "#",
  },
  {
    type: 1,
    title: `Find your ideal TV`,
    url: `./images/category_1/categ5.jpg`,
    link_text: `See more#`,
    link: "#",
  },
  {
    type: 1,
    title: `Shop Laptops & Tablets`,
    url: `./images/category_1/categ6.jpg`,
    link_text: `See more`,
    link: "/accessories",
    data_path: "/data/laptops.json",
  },
  {
    type: 1,
    title: `Explore home bedding`,
    url: `./images/category_1/categ7.jpg`,
    link_text: `See more#`,
    link: "#",
  },
  {
    type: 2,
    title: `Shop by Category`,
    mini_data: [
      {
        url: `./images/category_2/categ1.1.jpg`,
        text: `Computer & Accessories`,
      },
      { url: `./images/category_2/categ1.2.jpg`, text: `Video Games` },
      { url: `./images/category_2/categ1.3.jpg`, text: `Baby` },
      { url: `./images/category_2/categ1.4.jpeg`, text: `Toys & Games` },
    ],
    link_text: `Shop now#`,
    link: "#",
    data_path: "/data/gaming_accessories.json",
  },
  {
    type: 2,
    title: `Gaming accessories`,
    mini_data: [
      { url: `./images/category_2/categ2.1.jpg`, text: `Headsets` },
      { url: `./images/category_2/categ2.2.png`, text: `Keyboards` },
      { url: `./images/category_2/categ2.3.jpg`, text: `Computer mice` },
      { url: `./images/category_2/categ2.4.jpg`, text: `Chairs` },
    ],
    link_text: `See more`,
    link: "/accessories",
    data_path: "/data/gaming_accessories.json",
  },
  {
    type: 2,
    title: `Comfy styles for her`,
    mini_data: [
      { url: `./images/category_2/categ3.1.jpg`, text: `Sweatshirts` },
      { url: `./images/category_2/categ3.2.jpg`, text: `Joggers` },
      { url: `./images/category_2/categ3.3.jpg`, text: `Cardigans` },
      { url: `./images/category_2/categ3.4.jpg`, text: `Easy tees` },
    ],
    link_text: `See more#`,
    link: "#",
  },
  {
    type: 2,
    title: `Gaming merchandise`,
    mini_data: [
      { url: `./images/category_2/categ4.1.jpg`, text: `Apparel` },
      { url: `./images/category_2/categ4.2.jpg`, text: `Hats` },
      { url: `./images/category_2/categ4.3.jpg`, text: `Action figures` },
      { url: `./images/category_2/categ4.4.jpg`, text: `Mugs` },
    ],
    link_text: `See more#`,
    link: "#",
    data_path: "/data/gaming_accessories.json",
  },
  {
    type: 3,
    url: `./images/category_3/categ1.jpg`,
    link: "/signin",
  },
];

export { cardData, carouselData };
