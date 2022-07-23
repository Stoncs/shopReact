import React from "react";
import "./product.scss";

export default function Product({ name, imageUrl, price, rating}) {
  return (

          <div className="element__wrapper">
            <div className="element__img element__item">
              <img src={imageUrl} alt={name} />
              {/* {console.log(imageUrl)} */}
            </div>
            <div className="element__title element__item">{name}</div>
            <div className="element__price element__item">Цена: {price}</div>
            <div className="element__rating element__item">Популярность: {rating}</div>
            <button className="element__item btn">В корзину</button>
          </div>
  )
}