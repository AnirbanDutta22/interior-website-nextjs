// import React from "react";

// const About = () => {
//   return (
//     <section className="relative">
//       <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
//         <span className="text-primary-btn font-semibold">ABOUT</span> US
//       </h1>
//     </section>
//   );
// };

// export default About;
import Image from "next/image";
import { FC } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
}

const CandleShowcase: FC = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Chesapeake Bay Candle",
      price: 19.12,
      originalPrice: 29.99,
      image: "/images/chesapeake-bay.jpg",
      isNew: true,
    },
    {
      id: "2",
      name: "Village Candle Cinnamon",
      price: 29.0,
      image: "/images/village-candle.jpg",
      isNew: true,
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-script text-amber-700">Best for you</h2>
        <h1 className="text-4xl font-semibold mt-4">
          New Collection Best Seller
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-blue-400 text-white px-2 py-1 text-xs rounded">
                New
              </span>
            )}

            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-2">
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandleShowcase;
