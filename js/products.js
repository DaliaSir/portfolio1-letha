const shoesData = [
  {
    name: "Pink Borgues",
    price: 3750,
    description:
      "Light pink leather low Borgues. Pointed toe. Stylish choise for every day or special occasions.",
    imageUrl: "images/products/alexandra-gorn-CJ6SJO_yR5w-unsplash.jpg",
    id: 1,
    category: "Casual",
    leather: "Glossy",
    salesPrice: "2250",
    sales: true,
    stock: true,
    popular: false
  },
  {
    name: "Casual Borgue Boots",
    price: 4200,
    description:
      "Black leather Borgue boots. Natural rubber sole perfect for everyday comfort.",
    imageUrl:
      "images/products/clark-street-mercantile-OSPZZTe_PyM-unsplash.jpg",
    id: 2,
    category: "Boots",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: true
  },
  {
    name: "Clasic Borgue Boots",
    price: 4200,
    description:
      "Light brown leather Borgue boots. Natural rubber sole perfect for everyday comfort.",
    imageUrl:
      "images/products/clark-street-mercantile-vZHOP7tQZk0-unsplash.jpg",
    id: 3,
    category: "Boots",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Light Brown Loafers",
    price: 2975,
    description:
      "Light brown suede loafers. Light and confortable for the warm summer days.",
    imageUrl: "images/products/david-lezcano-b_L9iE1DUHo-unsplash.jpg",
    id: 4,
    category: "Casual",
    leather: "Suede",
    salesPrice: "1950",
    sales: true,
    stock: true,
    popular: false
  },
  {
    name: "Weaved leather Oxfords",
    price: 3975,
    description:
      "Exlusive weaved leather Oxfords. Light and confortable for the warm summer days.",
    imageUrl: "images/products/fashion-601561_1280-2.jpg",
    id: 5,
    category: "Dress",
    leather: "Glossy",
    salesPrice: "2500",
    sales: true,
    stock: true,
    popular: false
  },
  {
    name: "Decorative Brown Loafers",
    price: 2975,
    description:
      "Light brown suede loafers. Light and confortable for the warm summer days.",
    imageUrl:
      "images/products/jeroen-den-otter-q7D864lJP9s-unsplash-Recovered.jpg",
    id: 6,
    category: "Casual",
    leather: "Suede",
    salesPrice: "1950",
    sales: true,
    stock: true,
    popular: false
  },
  {
    name: "Mountain Boots",
    price: 3950,
    description:
      "Light brown leather mountain boots. Perfect for adventures in the nature.",
    imageUrl: "images/products/logan-weaver-PdO0sdaLcdw-unsplash.jpg",
    id: 7,
    category: "Boots",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: true
  },
  {
    name: "Clasic Oxfords",
    price: 3950,
    description:
      "Dark brown leather Oxfords. Classic look, great for special occasions.",
    imageUrl: "images/products/mareks-steins-xKhF4V77Mrk-unsplash.jpg",
    id: 8,
    category: "Dress",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Suede Borgues",
    price: 3975,
    description:
      "Light brown suede borgue shoes. Classic look, great for everyday wear or special occasions.",
    imageUrl: "images/products/mnz-7srTa70hT-Y-unsplash.jpg",
    id: 9,
    category: "Dress",
    leather: "Suede",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: true
  },
  {
    name: "Clasic Boots",
    price: 4200,
    description:
      "Darker brown leather boots. Natural rubber sole perfect for everyday comfort.",
    imageUrl: "images/products/nordwood-themes-eGHlWS-zQSM-unsplash2.jpg",
    id: 10,
    category: "Boots",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Leather and textile Borgues",
    price: 3200,
    description:
      "Dark brown leather and textile Borgues. Pointed toe. Stylish choise for every day or special occasions.",
    imageUrl: "images/products/paul-stollery-hyhQuJBvS78-unsplash.jpg",
    id: 11,
    category: "Casual",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Exlusive black Loafers",
    price: 3500,
    description:
      "Crocodile leather imitation real leather loafers. Light and confortable for the warm summer days.",
    imageUrl: "images/products/pexels-giay-da-tino-2857040.jpg",
    id: 12,
    category: "Casual",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: true
  },
  {
    name: "Clasic Oxfords",
    price: 3950,
    description:
      "Light brown leather Oxfords. Classic look, great for special occasions.",
    imageUrl: "images/products/pexels-terje-sollie-298863.jpg",
    id: 13,
    category: "Dress",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "High Oxfords",
    price: 3950,
    description:
      "Cinnamon brown leather tall Oxfords. Classic look for elegant everyday look.",
    imageUrl: "images/products/radek-skrzypczak-WlB8TsI_th0-unsplash.jpg",
    id: 14,
    category: "Dress",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },

  {
    name: "Leather wallet",
    price: 350,
    description: "Dark leather wallet for cards.",
    imageUrl: "images/products/clayton-robbins-X_A2PG0JZWc-unsplash.jpg",
    id: 15,
    category: "Accessories",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Leather wallet",
    price: 350,
    description: "Black leather wallet for cards.",
    imageUrl: "images/products/mason-supply--lN0HnySy7w-unsplash.jpg",
    id: 16,
    category: "Accessories",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Leather belt",
    price: 350,
    description: "Dark brown leather belt.",
    imageUrl: "images/products/nordwood-themes-eGHlWS-zQSM-unsplash.jpg",
    id: 17,
    category: "Accessories",
    leather: "Glossy",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Banana socks",
    price: 75,
    description: "Pink socks with bananas patern.",
    imageUrl:
      "images/products/gabrielle-henderson-RKHGV6ESIlo-unsplash.jpg",
    id: 18,
    category: "Accessories",
    leather: "",
    salesPrice: "45",
    sales: true,
    stock: true,
    popular: false
  },
  {
    name: "Pizza socks",
    price: 75,
    description: "Pink socks with pica patern.",
    imageUrl: "images/products/pexels-taryn-elliott-5737914.jpg",
    id: 19,
    category: "Accessories",
    leather: "",
    salesPrice: "45",
    sales: true,
    stock: true,
    popular: true
  },
  {
    name: "Glossy leather care kit",
    price: 250,
    description: "Includes transparent and black wax, brush and cloth",
    imageUrl: "images/products/lina-verovaya-A_XUPiyPOvg-unsplash.jpg",
    id: 20,
    category: "Accessories",
    leather: "",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  },
  {
    name: "Suede leather care kit",
    price: 250,
    description: "Includes transparent and black wax, brush and cloth",
    imageUrl: "images/products/lina-verovaya-A_XUPiyPOvg-unsplash.jpg",
    id: 21,
    category: "Accessories",
    leather: "",
    salesPrice: "",
    sales: false,
    stock: true,
    popular: false
  }
];
