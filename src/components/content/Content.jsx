import React from "react";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { LoadingProduct, Product } from "../";
import { fetchProducts } from "../../redux/actions";

import './content.scss';

export default function Content() {
  const dispatch = useDispatch();

  const products = useSelector(({products}) => products.items);
  const isLoaded = useSelector(({products}) => products.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);


  useEffect(() => {
    dispatch(fetchProducts(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="content">
      <div className="content__wrapper">
        {isLoaded ? products.map(item => { return (
            <div key={item.id} className="content__element">
              <Product {...item} />
            </div>)})
            : Array(5).fill(<LoadingProduct />).map((item, index) => {return (
              <div key={index} className="content__element">
              {item}
            </div>)})
        }
      </div>
    </div>
  )
}