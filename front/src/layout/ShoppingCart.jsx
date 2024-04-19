import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product({ index, name, price, imageSrc, color, sizes, onDelete, onUpdatePrice }) {
  const [quantity, setQuantity] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const basePrice = price;
  const totalPrice = (basePrice + additionalPrice) * quantity;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onUpdatePrice(basePrice);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onUpdatePrice(-basePrice);
    }
  };

  const handleDelete = () => {
    onDelete(index, price, quantity);
  };
  

  const handlePriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setAdditionalPrice(price);
    onUpdatePrice(price - additionalPrice);
  };

  return (
    <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={imageSrc}
          alt={name}
          className="h-full object-center object-cover md:block hidden"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">
            {name}
          </p>
          <p className="text-base font-black leading-none text-gray-800">
            ฿{totalPrice}
          </p>
        </div>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: {color}</p>
        <p className="text-xs leading-3 text-gray-600 py-4">เลือกไซส์</p>
        <select
          aria-label="Select quantity"
          className="py-2 px-1 border border-gray-200 focus:outline-none"
        >
          {sizes.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
        <div className="counter">
          <p className="text-xs leading-3 text-gray-600 py-4">จำนวน</p>
          <div className="flex items-center">
            <button
              className="btn btn-inc bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleIncrement}
            >
              +
            </button>
            <h3 className="number text-2xl mx-4">{quantity}</h3>
            <button
              className="btn btn-dec bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              onClick={handleDecrement}
            >
              -
            </button>
      
            <button
              className="btn btn-delete bg-gray-300 text-gray-700 px-4 py-2 ml-4 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderSummary({ totalPrice }) {
  return (
    <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">สรุปคำสั่งซื้อ</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">ผลรวมย่อย</span>
        <span className="font-semibold text-sm">฿{totalPrice}</span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="text-xs leading-3 text-gray-600 py-4">
          ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ
        </span>
        <span className="text-xs leading-3 text-gray-600 py-4">ฟรี</span>
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>ยอดรวม</span>
          <span>฿{totalPrice}</span>
        </div>
        <Link to="/payment">
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            ชำระสินค้า
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function ShoppingCart() {
  const [products, setProducts] = useState([
    {
      name: "Nike Air Force 1 '07'",
      price: 3700,
      imageSrc:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02f8959e-927a-40c0-8ed6-366574f302d0/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-NMmm1B.png",
      color: "Black",
      sizes: ["US 6", "US 6.5", "US 7", "US 7.5", "US 8", "US 8.5", "US 9"],
      quantity: 1,
    },
    {
      name: "Nike Air Force 1 '07'",
      price: 3700,
      imageSrc:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff6c5f8b-8751-4f69-9d22-2031846d025f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-kv14Mh.png",
      color: "White",
      sizes: ["US 6", "US 6.5", "US 7", "US 7.5", "US 8", "US 8.5", "US 9"],
      quantity: 1,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(7400);

  const handleDelete = (index, productPrice, productQuantity) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (productPrice * productQuantity));
    setProducts((prevProducts) => {
      return prevProducts.filter((_, i) => i !== index);
    });
  };
  

  const handleUpdatePrice = (priceChange) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + priceChange);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">ตะกร้าสินค้า</h1>
          </div>
          {products.map((product, index) => (
            <Product
              key={index}
              index={index}
              name={product.name}
              price={product.price}
              imageSrc={product.imageSrc}
              color={product.color}
              sizes={product.sizes}
              onDelete={handleDelete}
              onUpdatePrice={handleUpdatePrice}
              quantity={product.quantity}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
      <Link to="/details" className="flex font-semibold text-indigo-600 text-sm mt-10">
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        กลับ
      </Link>
    </div>
  );
}
