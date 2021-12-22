import React from 'react';

export const UpBTN = () => {

  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return <button type="button" aria-label="button to go up in the page" className="btnUP bgGold fs-2 p-0" onClick={handleScroll}><i className="far fa-arrow-alt-circle-up"></i></button>;

}