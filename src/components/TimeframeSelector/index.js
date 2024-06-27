// import React from 'react';
// import './index.css'

// const TimeframeSelector = (props) => {
//   const {data,onChangeButton} = props
//   const {date,id} = data
//   const onClickButton =() =>{
//     onChangeButton(id)
//   }
//   return(
//     <div>
//     <button className='time-frame-button' onClick={onClickButton}>{date}</button>
//   </div>
//   )
// }


// export default TimeframeSelector;



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