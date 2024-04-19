import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get("http://localhost:8008/shoes");
        setShoes(response.data.shoes);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes(); 
  }, []); 

  return (
    <div className="flex flex-wrap justify-center">
      {shoes.map((shoe, index) => (
        <div key={index} className="max-w-xs bg-base-100 shadow-xl rounded-xl mr-4 mt-4">
          <figure className="px-3 py-3">
            <img src={shoe.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="px-3 py-2 text-center">
            <h2 className="text-lg font-semibold">{shoe.name}</h2>
            <p className="text-sm">{shoe.colors && shoe.colors.length} สี</p>
            <p className="text-sm">฿{shoe.price}</p>
            <Link to="/details">
              <div className="mt-2">
                <a href="details" className="btn btn-primary">สั่งซื้อ</a>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
