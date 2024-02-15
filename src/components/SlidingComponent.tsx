'use client';
import React, { useState } from 'react';
import { BellAlertIcon} from '@heroicons/react/24/solid'
import Image from 'next/image';
const SlidingDivComponent: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [notifs, setNotifs]:any=useState();

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <p>Below is a sliding down notification bell</p>
      <div>
      
      </div>
      <div className="sliding-div">
        {/* Content of the sliding div */
         <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative bg-white hover:bg-red-300">
         <p>press here</p>
         {<BellAlertIcon/>}
          
        </button>
        }
      </div>
      <div className={`hidden-div ${isHidden ? 'hidden' : 'transition-all duration-300 transform translate-y-0 hover:translate-y-full delay-300'}`}>
        {

          
            /*<Image source='' alt={''} width={120} height={200}/>*/
            <div><BellAlertIcon/></div>
            
            /*<p className='text-slate-100'>
            this was just buhhh
            </p>*/
        }
      </div>
      <button onClick={toggleHidden}>Toggle Hidden Div</button>
      <div className="overflow-hidden">
  <div className="bg-gray-200 p-4 transition-all duration-300 transform translate-y-0 hover:translate-y-full">
    
  </div>
</div>
    </div>
  );
};

export default SlidingDivComponent;