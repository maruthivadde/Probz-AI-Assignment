
import React from 'react';

import './index.css'

const TimeframeSelector = ({ onSelect }) => (
  <div className='button-container'>
    <button className='buttons' type='button' onClick={() => onSelect('daily')}>Daily</button>
    <button className='buttons'  type='button' onClick={() => onSelect('weekly')}>Weekly</button>
    <button className='buttons'  type='button' onClick={() => onSelect('monthly')}>Monthly</button>
  </div>
);

export default TimeframeSelector;