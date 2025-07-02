import hero1 from '../assets/images/hero1.jpg'
import hero from '../assets/images/hero.jpg'
import cookies1 from '../assets/images/cookies1.jpeg'
import pc from '../assets/images/pc.jpeg'
import cart1 from '../assets/images/cart1.jpg'
import cart2 from '../assets/images/cart2.jpg'
import cart3 from '../assets/images/cart3.jpg'
import cart4 from '../assets/images/cart4.jpg'
import cart5 from '../assets/images/cart5.jpg'
import cart6 from '../assets/images/cart6.png'
import cart7 from '../assets/images/cart7.jpg'
import cart8 from '../assets/images/cart8.jpg'
import cart9 from '../assets/images/cart9.jpeg'
import cart10 from '../assets/images/cart10.jpeg'
import cart11 from '../assets/images/cart11.jpeg'
import cart12 from '../assets/images/cart12.jpg'
import cart13 from '../assets/images/cart13.jpeg'
import cart14 from '../assets/images/cart14.jpg'
import cart15 from '../assets/images/cart15.jpg'
import cart16 from '../assets/images/cart16.jpg'
import cart17 from '../assets/images/cart17.jpg'
import cart18 from '../assets/images/cart18.jpeg'
import cart19 from '../assets/images/cart19.jpeg'
import cart20 from '../assets/images/cart20.jpeg'
import cart21 from '../assets/images/cart21.jpeg'
import cart22 from '../assets/images/cart22.jpeg'
import cart23 from '../assets/images/cart23.jpeg'
import cart24 from '../assets/images/cart24.jpeg'
const products = [
    {
      id: 1,
      name: "Cupcake Box",
      description: "Chocolate cupcake topped with  biscuits and strawberries.",
      price: 300,
      image: cart1,
      category: "cupcakes",
      rating: 5,
      reviews: 124
    },
    {
      id: 2,
      name: "Enumde Milk Chocolate with Peanuts",
      description: "Premium Natural chocolate with Peanut content",
      price: 50,
      image: pc,
      category: "chocolates",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Chocolate Cookies",
      description: "Freshly baked cookies with premium Chocolate chips",
      price: 180,
      image: cart2,
      category: "cookies",
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: "Milk Chip Cookies",
      description: "Freshly baked cookies with premium Milk chips",
      price: 20,
      image: cookies1,
      category: "cookies",
      rating: 4,
      reviews: 203
    },
    {
      id: 5,
      name: "Cookies",
      description: "Chocolate cookie loaded with big chunks of milk and dark chocolate.",
      price: 180,
      image: cart3,
      category: "cookies",
      rating: 5,
      reviews: 178
    },
    {
      id: 6,
      name: "Cupcake Box",
      description: "Bite-sized cupcakes packed with flavor.",
      price: 300,
      image: cart4,
      category: "cupcakes",
      rating: 5,
      reviews: 95
    },
    {
      id: 7,
      name: "Fresh Cookies",
      description: "Soft, dark chocolate cookie with a rich, deep cocoa flavor.",
      price: 180,
      image: cart5,
      category: "cookies",
      rating: 4,
      reviews: 134
    },
    {
      id: 8,
      name: "Enumde Milk Chocolate with Peanuts",
      description: "Premium Natural chocolate with Peanut content",
      price: 50,
      image: cart6,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 9,
      name: "Chocolate cookies",
      description: " Chocolate cookie loaded with big chunks of milk and dark chocolate.",
      price: 180,
      image: cart7,
      category: "cookies",
      rating: 4,
      reviews: 167
    },
    {
      id: 10,
      name: "Cupcake box",
      description: " with colorful icing decorations",
      price: 300,
      image: cart8,
      category: "cupcakes",
      rating: 4,
      reviews: 167
    },
    {
      id: 11,
      name: "Enumde Dark chocolate",
      description: "Smooth and intense. A classic dark chocolate bar with 100% cocoa",
      price: 50,
      image: cart9,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 12,
      name: "Enumde Chocolate bars",
      description: "Classic chocolate bars with 100% cocoa and other crops",
      price: 150,
      image: cart10,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 13,
      name: "Customized Chocolate bars",
      description: "Design your own chocolate bar just the way you like it.",
      price: 60,
      image: cart11,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 14,
      name: "Cupcake Box",
      description: " with colorful icing decorations",
      price: 300,
      image: cart12,
      category: "cupcakes",
      rating: 4,
      reviews: 167
    },
    {
      id: 15,
      name: "Enumde Dark chocolate",
      description: "Smooth and intense. A classic dark chocolate bar with 100% coco",
      price: 50,
      image: cart13,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 16,
     name: "Cupcake Box",
      description: "Chocolate cupcake topped with  biscuits and strawberries.",
      price: 300,
      image: cart14,
      category: "cupcakes",
      rating: 5,
      reviews: 124
    },
    {
      id: 17,
      name: "Customized Wedding cake",
      description: " with colorful icing decorations",
      price: 1500,
      image: cart15,
      category: "custom orders",
      rating: 4,
      reviews: 167
    },
    {
      id: 18,
      name: "Cupcake",
      description: " with colorful icing decorations",
      price: 300,
      image: cart16,
      category: "cupcakes",
      rating: 4,
      reviews: 167
    },
    {
      id: 19,
      name: "Customized Wedding cake",
      description: " with colorful icing decorations",
      price: 1500,
      image: cart17,
      category: "custom orders",
      rating: 4,
      reviews: 167
    },
    {
      id: 20,
      name: "Enumde Chocolate Bars",
      description: "Premium chocolates made from cocoad infused with local crops",
      price: 50,
      image: cart18,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 21,
      name: "Customized Chocolate bars",
      description: "Design your own chocolate bar just the way you like it.",
      price: 60,
      image: cart19,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 22,
      name: "Enumde Chocolate Bars",
      description: "Premium chocolates made from cocoad infused with local crops",
      price: 50,
      image: cart20,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 23,
      name: "Enumde Mango Chocolate Bars",
      description: "Premium chocolates made from cocoad infused with fresh mango",
      price: 50,
      image: cart21,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 24,
      name: "Enumde Chocolate Bars",
      description: "Premium chocolates made from cocoad infused with local crops",
      price: 50,
      image: cart22,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 25,
      name: "Enumde Chocolate Bars",
      description: "Premium chocolates made from cocoad infused with local crops",
      price: 50,
      image: cart23,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
    {
      id: 10,
      name: "Customized Chocolate bars",
      description: "Design your own chocolate bar just the way you like it.",
      price: 60,
      image: cart24,
      category: "chocolates",
      rating: 4,
      reviews: 167
    },
  ];

   export default products;