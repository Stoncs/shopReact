import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import './SortPopup.scss';

export default function SortPopup({ sortPopupItems, onClickSortType, activeSortType }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const popupEl = useRef(null);
  let activeItemLabel = sortPopupItems.find(obj => obj.type === activeSortType).name;
  
  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(popupEl.current)) {
      setVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []) ;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  }

  return (
    <div 
    ref={popupEl} 
    className="sort-popup"
    onClick={toggleVisiblePopup}>
      <span className="sort-popup__text">
        Сортировать по:
      </span>
      <span className="sort-popup__text2">
        {activeItemLabel}
      </span>
      <div className={classNames("sort-popup__wrapper", !visiblePopup ? "sort-popup__disabled" : "")}>
        { sortPopupItems &&
         sortPopupItems.map((obj, index) => (
          <div 
            className={classNames("sort-popup__item", obj.type === activeSortType ? "sort-popup__active" : '')}
            onClick={() => onSelectItem(obj)}
            key={`${obj.type}_${index}`}>
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  )

}