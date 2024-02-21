import product1Image from "../../assets/images/ProductImage/product1.jpg";
import product2Image from "../../assets/images/ProductImage//product2.jpg";
import product3Image from "../../assets/images/ProductImage//product3.jpg";
import product4Image from "../../assets/images/ProductImage//product4.jpg";
import product5Image from "../../assets/images/ProductImage//product5.jpg";
import product6Image from "../../assets/images/ProductImage//product6.jpg";
import product7Image from "../../assets/images/ProductImage//product7.jpg";
import product8Image from "../../assets/images/ProductImage//product8.jpg";
import product9Image from "../../assets/images/ProductImage//product9.jpg";
import product10Image from "../../assets/images/ProductImage//product10.jpg";

const products = [
  {
    id: 1,
    imgSrc: product1Image,
    imageSlider: [
      product1Image,
      product2Image,
      product3Image,
      product4Image,
      product5Image,
    ],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },

  {
    id: 2,
    imgSrc: product2Image,
    imageSlider: [
      product1Image,
      product2Image,
      product3Image,
      product4Image,
      product5Image,
    ],
    rating: 3,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: true,
    featuredItems: true,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 3,
    imgSrc: product3Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 4,
    imgSrc: product4Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 5,
    imgSrc: product5Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: true,
    discountPercentage: 15,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 5,
    imgSrc: product5Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: true,
    discountPercentage: 15,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },

  {
    id: 6,
    imgSrc: product6Image,
    imageSlider: [
      product6Image,
      product7Image,
      product8Image,
      product9Image,
      product10Image,
    ],
    rating: 2,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: true,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },

  {
    id: 7,
    imgSrc: product7Image,
    imageSlider: [
      product7Image,
      product8Image,
      product9Image,
      product10Image,
      product1Image,
    ],
    rating: 5,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },

  {
    id: 8,
    imgSrc: product8Image,
    imageSlider: [
      product1Image,
      product2Image,
      product3Image,
      product4Image,
      product5Image,
    ],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },

  {
    id: 9,
    imgSrc: product9Image,
    imageSlider: [
      product1Image,
      product2Image,
      product3Image,
      product4Image,
      product5Image,
    ],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: true,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },

  {
    id: 1,
    imgSrc: product10Image,
    imageSlider: [
      product1Image,
      product2Image,
      product3Image,
      product4Image,
      product5Image,
    ],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    discountPercentage: 15,
    setSale: true,
    setNew: true,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
    featuredItems: true,
  },
];

export default products;
