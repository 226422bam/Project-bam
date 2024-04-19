import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Payment() {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "https://i.pinimg.com/736x/7f/47/c9/7f47c9081a1b37e9123e3cd51f2595ef.jpg",
      imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      href: "/"
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mt-10 p-5 border w-1/3 w- min-w-[600px] h-auto rounded-[20px] mx-auto bg-white shadow-md flex">
        <div>
          {movies.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="flex gap-5 pb-10 pl-10">
                <p className="text-black font-bold text-3xl mx-44">ชำระเงิน</p>
              </div>
              <p className="text-black text-center">Scan to pay for meeting room bookings </p>
              <p className="text-black text-center"> thank you </p>

              <div className="w-56 mx-44  ">
                <img src={product.imageSrc} alt={product.imageAlt} />
              </div>

              <div className="flex gap-5 pb-3 pl-1 ">
                <p className="text-gray-500 mx-48">Date: Dic 18  Time: 20:30</p>
              </div>
            </Link>
            
          ))}
          
          <Link to="/shoppingcart">
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              กลับ
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
