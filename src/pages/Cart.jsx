import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, EmptyCart } from "../components";
import { clearProductCart } from "../redux/actions";

import './Cart.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(({cart}) => cart.items);
  const addedProducts = Object.keys(items).map((key) => {
    return items[key][0];
  });

  const showBtn = () => (<div className="btn-clear"><button className="btn" onClick={() => dispatch(clearProductCart())}>Очистить корзину</button></div>);

  const showTitles = () => (
    <div className="cart-titles__wrapper">
      <div className="cart-titles__img"></div>
      <div className="cart-titles__name">Название</div>
      <div className="cart-titles__price">Стоимость</div>
      <div className="cart-titles__count">Количество</div>
      <div className="cart-titles__btn"></div>
      <div className="cart-titles__btn"></div>
    </div>
  );
  
  return (
    <div className="cart">
      { addedProducts.length === 0 && <EmptyCart />}
      { addedProducts.length > 0 && showBtn() }
      { addedProducts.length > 0 && showTitles() }
      <div className="cart__items">
        { addedProducts && addedProducts.map((obj, index) => {
          return (
            <CartItem key={`${obj.id}_${index}`} obj={obj}/>
          )
        })}
      </div>
    </div>
  )
}