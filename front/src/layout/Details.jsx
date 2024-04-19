import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function details() {
  const [quantity, setQuantity] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClear = () => {
    setQuantity(1);
    setAdditionalPrice(0);
  };

  const handlePriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setAdditionalPrice(price);
  };

  const totalPrice = (3700 + additionalPrice) * quantity;

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div style={{ width: "550%", alignSelf: "flex-start" }}>
              <div className="flex items-center">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/รองเท้าผู้-air-force-1-07-WrLlWX.png"
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                width: "180%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/รองเท้าผู้-air-force-1-07-WrLlWX.png"
                alt=""
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/รองเท้าผู้-air-force-1-07-WrLlWX.png"
                alt=""
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/รองเท้าผู้-air-force-1-07-WrLlWX.png"
                alt=""
              />
            </div>

            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center"></div>
          </div>

          <Link to="/product">
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

        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Nike Air Force 1 '07
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              2 สี
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                  <div className="md:w-4/12 2xl:w-1/4 w-full mb-2 md:mb-0">
                    <img
                      src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-WrLlWX.png"
                      alt="Black Leather Purse"
                      className="h-full object-center object-cover md:block hidden"
                    />
                  </div>
                  <div className="md:w-4/12 2xl:w-1/4 w-full mb-2 md:mb-0">
                    <img
                      src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-WrLlWX.png"
                      alt="Black Leather Purse"
                      className="h-full object-center object-cover md:block hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <p className="text-orange-500 font-bold">฿3,700</p>
            <br />

            <div className="counter">
              <p className="text-black font-semibold mr-6">จำนวน</p>
              <div className="flex items-center">
                <button
                  className="btn btn-inc bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={handleIncrement}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <h3 className="number text-2xl mx-4">{quantity}</h3>
                <button
                  className="btn btn-dec bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                  onClick={handleDecrement}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button
                  className="btn btn-clr bg-gray-300 text-gray-700 px-4 py-2 ml-4 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <p className="text-black font-semibold mr-6">เลือกไซส์</p>
          <select
            aria-label="Select quantity"
            className="py-2 px-1 border border-gray-200 focus:outline-none"
          >
            <option>US 6</option>
            <option>US 6.5</option>
            <option>US 7</option>
            <option>US 7.5</option>
            <option>US 8</option>
            <option>US 8.5</option>
            <option>US 9</option>
          </select>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>ราคารวม</span>
              <span>฿{totalPrice}</span>
            </div>
            <Link to="/shoppingcart">
              <div className="mt-2">
                <a
                  href="shoppingcart"
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-6 text-sm text-white uppercase inline-block w-full text-center"
                >
                  สั่งซื้อสินค้า
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
