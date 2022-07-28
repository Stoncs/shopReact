import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components";
import { clearProductCart } from "../redux/actions";

import './Cart.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(({cart}) => cart.items);
  const addedProducts = Object.keys(items).map((key) => {
    return items[key][0];
  });

  const showBtn = () => (<div className="btn-clear"><button className="btn" onClick={() => dispatch(clearProductCart())}>Очистить корзину</button></div>);
  
  return (
    <div className="cart">
      { addedProducts.length > 0 && showBtn()}
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