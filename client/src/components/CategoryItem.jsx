import React from 'react';
import '../styles/CategoryItem.scss';

// eslint-disable-next-line react/prop-types
function CategoryItem({ id, image, name, filterByCategory, setCurrenPage }) {
   return (
      <div
         className="category-item"
         aria-hidden="true"
         onClick={() => filterByCategory(id, setCurrenPage)}
      >
         <div className="category-item-img">
            <img src={image} alt={name} />
         </div>
         <h3>{name}</h3>
      </div>
   );
}

export default CategoryItem;
