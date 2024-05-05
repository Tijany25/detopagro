
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
  const handleCategoryClick = () => {
    localStorage.setItem('cat', title);
  };
  return (
    <div className=" h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-3xl cursor-pointer">
      <Link onClick={handleCategoryClick} href="/products">
      <div className="w-full relative h-4/5">
        <img
          className="w-full h-full transition duration-300 transform hover:scale-110"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 backdrop-filter backdrop-blur-[2px]">
        <h2 className="text-lg font-bold text-green">View Products &gt;&gt;&gt;</h2>
      </div>
      </div>
      <div className="text-deep-green py-3 px-2">
        <h2 className="text-lg text-deep-green font-bold">{title}</h2>
      </div>
      </Link>
  
</div>



  );
};

//export default Card;

export default CategoryCard;
