import React from "react";
import { useDispatch } from "react-redux";
import { addProductCart, minusProductCart } from "../../redux/actions";

import './CartItem.scss';

export default function CartItem({ obj }) {
  const dispatch = useDispatch();

  // const onClickAddProductToCart = () => {
  //   const obj = {
  //     id,
  //     name,
  //     imageUrl,
  //     price,
  //     rating,
  //     count: newCount,
  //   }
  //   dispatch(addProductCart(obj));
  // }

  return (
    <div className="cart-item__wrapper">
      <div className="cart-item__img"><img src={obj.imageUrl} alt={obj.name}/></div>
      <div className="cart-item__name">{obj.name}</div>
      <div className="cart-item__price">{obj.price * obj.count} ₽</div>
      <div className="cart-item__count">{obj.count}</div>
      <div className="cart-item__btn-plus"><button className="btn">+</button></div>
      <div className="cart-item__btn-minus"><button className="btn">-</button></div>
    </div>
  )
}