import React, { useState } from "react";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../data";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import StatisticsChart from '../statisticschart/StatisticsChart'
const Statistics = () => {

  const [on , setOn] = useState(false)
  return (
    <div className={`${css.container} theme-container`}>

<div>

      <span className={css.title}>Overview Statistics</span>
      <div onClick={()=>setOn(!on)}>

      {on? <ToggleOnIcon/> :  <ToggleOffIcon/>}
      </div>
    
</div>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
          <span>Top program this month</span>
          <span>Housing Choice Vouchers</span>
          </div>
        </div>

        <div className={css.card}>
        <span>Total Units Managed</span>
        <span>{groupNumber(9500)}</span>
        </div>
        <div className={css.card}>
        <span>Annual Budget</span>
        <span>${groupNumber(150000000)}</span>
        </div>
        <div className={css.card}>
        <span>Avg. Monthly Assistance</span>
        <span>${groupNumber(750)}</span>
        </div>

      </div>
  

<StatisticsChart on={on}/>
    </div>

  );
};

export default Statistics;
