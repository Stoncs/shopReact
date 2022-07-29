import React from "react";
import { useDispatch } from "react-redux";
import { addProductCart, minusProductCart } from "../../redux/actions";

import './CartItem.scss';

export default function CartItem({ obj }) {
  const dispatch = useDispatch();

  const onClickAddProductToCart = () => {
    const newObj = {
      id: obj.id,
      name: obj.name, 
      imageUrl: obj.imageUrl,
      price: obj.price,
      rating: obj.rating,
      count: obj.count + 1,
    }
    dispatch(addProductCart(newObj));
  }

  const onClickMinusProductToCart = () => {
    const newObj = {
      id: obj.id,
      name: obj.name, 
      imageUrl: obj.imageUrl,
      price: obj.price,
      rating: obj.rating,
      count: obj.count - 1,
    }
    dispatch(minusProductCart(newObj));
  }

  return (
    <div className="cart-item__wrapper">
      <div className="cart-item__img"><img src={obj.imageUrl} alt={obj.name}/></div>
      <div className="cart-item__name">{obj.name}</div>
      <div className="cart-item__price">{obj.price * obj.count} ₽</div>
      <div className="cart-item__count">{obj.count}</div>
      <div className="cart-item__btn-plus"><button className="btn" onClick={() => onClickAddProductToCart()}>+</button></div>
      <div className="cart-item__btn-minus"><button className="btn" onClick={() => onClickMinusProductToCart()}>-</button></div>
    </div>
  )
}