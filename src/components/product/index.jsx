import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart, minusProductCart, plusProductCart } from '../../redux/actions';
import "./product.scss";

export default function Product({ id, name, imageUrl, price, rating, onClickProduct}) {
  const dispatch = useDispatch();
  const items = useSelector(({cart}) => cart.items)
  const [count, setCount] = useState(items[id] === undefined ? 0 : items[id][0].count);
  // console.log(items)
  const $btn_plus = useRef();
  const $btn_minus = useRef();

  // useEffect(() => {
  //   $btn_plus.current.
  // }, [count])
  const onClickPlusProductToCart = () => {
    const newCount = count + 1;
    setCount(count + 1);
    const obj = {
      id,
      name,
      imageUrl,
      price,
      rating,
      count: newCount,
    }
    dispatch(plusProductCart(obj));
  }

  const onClickMinusProductToCart = () => {
    const newCount = count - 1;
    setCount(newCount);
    const obj = {
      id,
      name,
      imageUrl,
      price,
      rating,
      count: newCount,
    }
    dispatch(minusProductCart(obj));
  }

  const onClickAddProductToCart = () => {
    const newCount = count + 1;
    setCount(newCount);
    const obj = {
      id,
      name,
      imageUrl,
      price,
      rating,
      count: newCount,
    }
    dispatch(addProductCart(obj));
  }


  // buttons plus and minus redo with useEffect
  return (
          <div className="element__wrapper">
            <div className="element__img element__item">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="element__title element__item">{name}</div>
            <div className="element__price element__item">Цена: {price}</div>
            <div className="element__rating element__item">Популярность: {rating}</div>
            <div className="element__item">
              <button className={classNames("btn", count === 0 ? "btn_disabled" : '')} disabled={count === 0} onClick={onClickPlusProductToCart} ref={$btn_plus}>+</button>
              <button className="btn btn_to_cart" onClick={onClickAddProductToCart}><span>{ count ? count : 'В корзину'}</span></button>
              <button className={classNames("btn", count === 0 ? "btn_disabled" : '')} disabled={count === 0} onClick={onClickMinusProductToCart} ref={$btn_minus}>-</button>
            </div>
          </div>
  )
}