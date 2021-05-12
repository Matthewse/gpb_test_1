import React from 'react';
import './Item.css';

const Item = ({ data }) => {
   return (
      <>
         <div className='items__row'>
            {data.map(({ header, options }, index) =>
               <div className='items__cell items__cell--no-bottom-border' key={index}>
                  <div className='item'>
                     <h2 className="item__title">{header}</h2>
                     <ul className="item__list">
                        {options.map((elem, index) => <li className="item__list-elem" key={index}>{elem}</li>)}
                     </ul>
                  </div>
               </div>
            )}
         </div>
         <div className='items__row'>
            {data.map(({ text }, index) =>
               <div className='items__cell items__cell--no-top-border' key={index}>
                  <p className='item__text'>{text}</p>
               </div>
            )}
         </div>
      </>
   )
}

export default Item;