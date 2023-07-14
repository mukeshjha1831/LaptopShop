import React from 'react'
import './styles/styles.css'
import { useEffect, useState } from 'react';
function Catagory({laptopData}) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

   //Displays Laptops data with load more option
  const displayItems = () => {

    return laptopData?.slice(0, currentPage * itemsPerPage).map(el => {
      return <div className='card-items'>
      <p className='laptop-img'><img className='laptop-images' src={el?.picture} alt="Laptop Image"/></p>
      <h3 className='laptop-name'>{el?.name}</h3>
      <p><strong>$</strong> {el?.price}</p>
      <p><strong>HDD:</strong> {el.HDD}</p>
      <p><strong>OS:</strong> {el.OS}</p>
      <p><strong>RAM:</strong> {el.RAM}</p>
      <p><strong>Screen Size</strong> {el?.screenSize}</p>
      </div>
     });
  };
  
  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };

    return (
      <>
    <div  className='body-container'>
    <div  className='card-container'>
      {displayItems()}
      </div>
      <div>
      {laptopData?.length > currentPage * itemsPerPage && (
        <button className='loadMoreBtn' onClick={loadMoreItems}>Load More</button>
      )}
</div>
</div>  
    </>
)

}

export default Catagory