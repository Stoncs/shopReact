import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector(({cart}) => cart.items)
  const addedProducts = Object.keys(items).map((key) => {
    return items[key][0];
  });

  return (
    <div>
      { addedProducts.map((obj, index) => {
        return (
        <div key={`${obj.id}_${index}`}>{obj.name} {obj.price * obj.count}Р {obj.count}</div>
        )
      })}
    </div>
  )
}