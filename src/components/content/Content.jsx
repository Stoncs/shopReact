import React from "react";
import {Product} from "../";
import { useSelector } from 'react-redux'

import './content.scss';

export default function Content() {
  
  const products = useSelector(({products}) => products.items);

  return (
    <div className="content">
      <div className="content__wrapper">
        {products && products.map(item => { return (
            <div key={item.id} className="content__element">
              {/* {console.log(item)} */}
              <Product {...item} />
            </div>)})}
        {/* {products && products.map(item => console.log(item))} */}
        {/* {console.log(products)} */}
      </div>
    </div>
  )
}