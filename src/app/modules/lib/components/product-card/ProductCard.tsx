// 'use client'

// import React, { FC, useState } from "react";
// import Image from "../image/Image";
// import {AiFillStar, AiOutlinePlus, AiFillHeart, AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
// import classNames from "classnames";
// import { PiNotePencil } from "react-icons/pi";
// import './CategoryCard.module.scss'
// import { TbTrashX } from "react-icons/tb";

// interface ICategoryCard {
//   product: {
//     images: string[],
//   }
// }

// const CategoryCard: FC<ICategoryCard> = () => {
//   const [selectedImage, setSelectedImage] = useState(product.images[0]);
//   const [isFavourite, setIsFavorite] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="mt-30 l:mt-20">
//       <div
//         id="image"
//         className="relative ratio-1 radius-10 g|overflow:hidden l:radius-15"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <Image
//           className="absolute w-full h-full a-self-center g|object-fit:cover pointer"
//           src={selectedImage}
//           alt="product-image"
//         />
//         {isHovered && (
//           <div className="relative">
//             <div className="w-100p h-340 a-self-center bg-black opacity-40"></div>
//             <div className="flex gap-10 take-to-center">
//               <div className="text-center bg-white p-20 radius-50p">
//                 <PiNotePencil className="text-grey-900 text-30 mr-4 cursor-pointer " />
//               </div>
//               <div className="text-center bg-white p-20 l-90 radius-50p">
//               <TbTrashX className="text-red text-30 mr-4 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         )}
//         <div
//           id="add to cart button"
//           className="absolute b-0 r-0 mr-10 mb-10 l:mr-15 l:mb-15"
//         >
//           <button className="bg-green pointer font-roboto text-white border-hidden px-10 py-10 radius-5 l:px-22 l:py-12 l:radius-10 outline outline-grey ">
//             <span className="hidden l:block weight-500">Add to cart</span>
//             <div className="l:hidden">
//               <AiOutlinePlus size={24} />
//             </div>
//           </button>
//         </div>
//         <div
//           id="favorite icon"
//           className="absolute t-0 r-0 mr-10 mt-10 l:mr-15 l:mt-15 text-24 l:text-34"
//           onClick={() => setIsFavorite((fav) => !fav)}
//         >
//           <AiFillHeart color={isFavourite ? "#ffffffee" : "#000000aa"} className="shadow" />
//         </div>
//       </div>
//       <div
//         id="product varients"
//         className="mt-15 flex a-items-center gap-13 "
//       >
//         {product.images.map((image, i) => (
//           <Image
//             className={classNames("w-32 h-32 pointer radius-5 l:radius-8 a-self-center g|object-fit:cover", {
//               'border border-green border-2': selectedImage == image
//             })}
//             src={image}
//             onClick={() => setSelectedImage(image)}
//             alt="product-image"
//           />
//         ))}
//       </div>
//       <div
//         id="product details"
//         className="mt-15 overflow-hidden white-space-nowrap text-overflow-ellipsis"
//       >
//         <h3 className="text-16 l:text-15 weight-500">
//           24 Karat Gold Plated Ring
//         </h3>
//         <div className="flex a-items-center gap-10 l:gap-18 mt-5 text-dimgrey">
//           <p>Rotimi’s store</p>
//           <div className="flex gap-3 items-center">
//             <AiFillStar className="w-12" />
//             <span>4.5</span>
//           </div>
//         </div>
//         <div className="mt-6 text-18 l:text-15 weight-700">₦54,000 <span className="weight-300">per yard</span></div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import classNames from "classnames";
import './ProductCard.module.scss'
import Link from "next/link";


interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  id: any
}

const ProductCard: React.FC<CardProps> = ({ imageUrl, title, description, id }) => {
  return (
  //   <div className="group flex w-full max-w-xs flex-col overflow-hidden border-1 border-gray-100 bg-white shadow-md">
  //   <a className="relative flex h-60 overflow-hidden" href="#">
  //     <img className="absolute top-0 right-0 h-full w-full object-cover" src={imageUrl} alt="product image" />
  //     <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
  //       <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
  //       <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
  //       <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div> 
  //     </div>
  //     <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
  //       <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
  //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  //           <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  //         </svg>
  //       </button>
  //     </div>
  //   </a>
  //   <div className="mt-4 px-5 pb-5">
  //     <a href="#">
  //       <h5 className="text-xl tracking-tight text-slate-900">Lululemon Comfort Tee - White</h5>
  //     </a>
  //     <div className="mt-2 mb-5 flex items-center justify-between">
  //       <p>
  //         <span className="text-3xl font-bold text-slate-900">$79</span>
  //         <span className="text-sm text-slate-900 line-through">$99</span>
  //       </p>
  //     </div>
  //     <button className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  //         <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  //       </svg>
  //       Add to cart
  //     </button>
  //   </div>
  // </div>

  <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer">
    <div className="relative h-64">
        <img className="w-full h-full" src={imageUrl} alt="Product Image" />
        {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div> */}
    </div>
    <div className="py-4 px-2">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm min-h-20">{description}</p>
        <div className="flex items-center justify-center">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-deep-green font-bold py-2 px-4 rounded">
          Contact US
      </button> */}
        <button className="bg-blue-500 hover:bg-blue-600 text-deep-green font-bold py-2 px-4 rounded">
        <Link href={`/products/${id}`}> View Product details</Link>
      </button>
        </div>
    </div>
</div>




  );
};

export default ProductCard;
