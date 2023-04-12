import React from 'react';
import ReactCompareImage from 'react-compare-image';
import css from './Virtual.module.css';
//import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png';
import After from  '../../assets/after.png';

const Virtual = () => {
  return (
    <div className={css.Virtual}>
    <div className={css.left}>
    <span>Virtual</span>
    <span>Never Buy the shade again</span>
    <span>Try Now</span>
    </div>
    {/*<img src={Shade}alt="" />*/}

    <div className={css.right}>
    <div className={css.wrapper}>
     <ReactCompareImage leftImage={Before} 
     rightImage={After} />
    </div>
    </div>
</div>
  );
};

export default Virtual
