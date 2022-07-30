import React from "react";
import { Link } from "react-router-dom";

import './emptyCart.scss';

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart__emoji">¯\_(ツ)_/¯</div>
      <div className="empty-cart__text">Сейчас корзина пустая</div>
      <div className="empty-cart__text">Перейдите в каталог, чтобы она перестала быть пустой :)</div>
      <Link to='/'><button className="btn empty-cart__btn">Каталог</button></Link>
    </div>
  )
}