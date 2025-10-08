import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <CustomSelectBoxContainer>
      {displayedValue}
      <CustomSelectBox value={value} onChange={onChange}>
        {children}
      </CustomSelectBox>
      <Icon style={{'display' : 'inline-block', 'verticalAlign': 'middle', 'paddingLeft': '10px'}} id='chevron-down' size='24'></Icon>      
    </CustomSelectBoxContainer>
  );
};

const CustomSelectBox = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const CustomSelectBoxContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 10px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 10px;
  :focus {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
  :hover {
    color: ${COLORS.black};
  }
`;

export default Select;
