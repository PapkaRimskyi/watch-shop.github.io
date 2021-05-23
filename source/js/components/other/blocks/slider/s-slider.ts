import styled from 'styled-components';

import { MARGIN_AUTO } from '../../../../styles/variables';

const List = styled.ul`
  margin: ${MARGIN_AUTO};
  margin-right: 55%;
  width: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li:last-of-type svg {
    transform: rotate(180deg);
  }
`;

export default List;
