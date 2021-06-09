import React, { FC, useState } from 'react';

import VisuallyHidden from '../../../../../../../styles/mixins/visually-hidden/visually-hidden';

import { Section, Label, SortInput, List } from './s-sort';

import { ENTER } from '../../../../../../../styles/variables';

import data from './data/data';

import '../../../../../../../../img/unique-icon/arrow.svg';

const Sort: FC = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const [defaultSortType, setDefaultSortType] = useState('популярности');

  // Обработчик сортировки

  const inputHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (e.type === 'click' || (e.type === 'keyup' && (e as React.KeyboardEvent).code === ENTER)) {
      setPopupStatus((prevState) => !prevState);
    }
  };

  //

  // Обработка клика внутри списка доступных сортировок

  const popupClickListHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLAnchorElement) {
      const { textContent } = e.target as HTMLAnchorElement;
      setDefaultSortType((prevState) => textContent || prevState);
      setPopupStatus(false);
    }
  };

  //

  return (
    <Section>
      <VisuallyHidden>Сортировка товара</VisuallyHidden>
      <Label htmlFor="sort-input">Сортировать по <SortInput onClick={inputHandler} onKeyUp={inputHandler} id="sort-input" type="text" value={defaultSortType} title="Тип сортировки" readOnly /></Label>
      {popupStatus && (
        <List onClick={popupClickListHandler}>
          {data.map((type) => (
            <li key={type}>
              <a href=" " title={`Сортировка по ${type}`}>{type}</a>
            </li>
          ))}
        </List>
      )}
    </Section>
  );
};

export default Sort;
