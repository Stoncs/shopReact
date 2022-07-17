import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import './SortPopup.scss';

export default function SortPopup({ sortPopupItems }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeSortPopupItem, setActiveSortPopupItem] = useState(0);
  const popupEl = useRef(null);
  let activeItemLabel = sortPopupItems[activeSortPopupItem];
  
  const handleOutsideClick = (e) => {
    if (!e.path.includes(popupEl.current)) {
      setVisiblePopup(false);
    }
    // console.log('handleOutside');
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []) ;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
    // console.log('toggle');
  }

  const onSelectItem = (index) => {
    setActiveSortPopupItem(index);
    setVisiblePopup(false);
    // console.log('onSelect');
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
         sortPopupItems.map((item, index) => (
          <div 
            className={classNames("sort-popup__item", activeSortPopupItem === index ? "sort-popup__active" : '')}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )

}