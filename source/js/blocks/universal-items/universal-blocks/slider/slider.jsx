import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../svg-icons/arrow';

export default function Slider({ sliderNumber, majorClass, sliderNumberChangeHandler }) {
  function arrowsHandler(e) {
    e.preventDefault();
    if (e.target.closest('.slider__button--left')) {
      sliderNumberChangeHandler('left');
    } else {
      sliderNumberChangeHandler('right');
    }
  }

  return (
    <div className={`slider ${majorClass}`} aria-label="Блок с переключением слайдеров">
      <button className="slider__button slider__button--left" type="button" aria-label="Предыдущий слайд" onClick={arrowsHandler}>
        <Arrow />
      </button>
      <p className="slider__slide-number">{`0${sliderNumber}`}</p>
      <button className="slider__button slider__button--right" type="button" aria-label="Следующий слайд" onClick={arrowsHandler}>
        <Arrow />
      </button>
    </div>
  );
}

Slider.propTypes = {
  sliderNumber: PropTypes.number.isRequired,
  majorClass: PropTypes.string.isRequired,
  sliderNumberChangeHandler: PropTypes.func.isRequired,
};
