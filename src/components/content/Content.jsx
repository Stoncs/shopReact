import React from "react";

import './content.scss';
import shrek from './../../assets/img/content1.jpg'

export default function Content() {
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__element">
          <div className="element__wrapper">
            <div className="element__img">
              <img src={shrek} alt="shrek" />
            </div>
            <div className="element__title">Shrek</div>
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}