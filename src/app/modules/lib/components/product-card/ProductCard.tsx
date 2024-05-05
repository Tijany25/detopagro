import React from "react";
import Link from "next/link";


interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  _id: any
}

const ProductCard: React.FC<CardProps> = ({ imageUrl, title, description, _id: id }) => {
  function truncateText(text: string, maxLength = 280) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }
  return (
  <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer">
    <div className="relative h-64">
        <img className="w-full h-full" src={imageUrl} alt="Product Image" />
        {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div> */}
    </div>
    <div className="py-4 px-2">
        <h3 className="text-lg text-green font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm h-40 text-ellipsis">{truncateText(description)}</p>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-deep-green font-bold py-2 px-4 rounded">
            <Link className="text-white rounded-md p-3 bg-green" href={`/products/${id}`}> View Product details</Link>
          </button>
        </div>
    </div>
</div>




  );
};

export default ProductCard;
