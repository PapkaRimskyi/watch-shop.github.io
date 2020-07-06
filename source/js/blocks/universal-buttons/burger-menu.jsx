import React from 'react';

export default function BurgerMenu() {
  return (
    <button className="burger-menu" type="button" aria-label="Меню">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H19M1 17H19M1 9H19" stroke="#1B1A17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
