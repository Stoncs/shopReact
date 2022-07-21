import React from "react";
import {Product} from "../";

import './content.scss';

export default function Content({products}) {
  return (
    <div className="content">
      <div className="content__wrapper">
        {products && products.map(item => { return (
            <div key={item.id} className="content__element">
              <Product {...item} />
            </div>)})}
        {products && products.map(item => console.log(item))}
        {/* {console.log(products)} */}
      </div>
    </div>
  )
}