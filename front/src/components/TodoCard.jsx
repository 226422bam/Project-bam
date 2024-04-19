import axios from "axios";
import React from "react";

export default function TodoCard(props) {
  const { el, openModal, setTrigger } = props;

  const statusColor =
    el.status === 'PENDING' ? 'bg-pink-300' :
    el.status === 'DOING' ? 'bg-blue-300' : 'bg-lime-300';

  const hdlDelete = async (e) => {
    try {
      e.stopPropagation();
      const token = localStorage.getItem('token');
      let rs = await axios.delete(`http://localhost:8008/todos/${el.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Delete successful');
      setTrigger(prev => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
<div className="flex items-center justify-center">
  <div className="max-w-xs bg-base-100 shadow-xl rounded-xl">
    <figure className="px-5 py-5">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="px-5 py-3 text-center">
      <h2 className="text-lg font-semibold">Shoes!</h2>
      <p className="text-sm">If a dog chews shoes whose shoes does he choose?</p>
      <div className="mt-3">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>
  );
}
