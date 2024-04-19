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
import './CategoryCard.module.scss'
import Link from "next/link";



interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    // <div className="relative h-48 overflow-hidden rounded-lg shadow-lg cursor-pointer">
    //   <div className="w-full h-4/5">
    //   <img
    //     className="w-full h-full object-cover object-center transition duration-300 transform hover:scale-110"
    //     src={imageUrl}
    //     alt={title}
    //   />
    //   </div>
    //   <div className="text-deep-green py-1 px-2">
    //     <h2 className="text-lg font-bold">{title}</h2>
    //   </div>
    // </div>
    <div className=" h-48 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
      <Link href="/products" >
      <div className="w-full relative h-4/5">
        <img
          className="w-full h-full transition duration-300 transform hover:scale-110"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 backdrop-filter backdrop-blur-[2px]">
        <h2 className="text-lg font-bold text-deep-green">View Products &gt;&gt;&gt;</h2>
      </div>
      </div>
      <div className="text-deep-green py-1 px-2">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      </Link>
  
</div>



  );
};

//export default Card;

export default CategoryCard;
