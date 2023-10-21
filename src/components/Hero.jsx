import React from 'react';
import styles  from '../style';
import { discount, robot } from '../assets';
import   Getstartted from "./Getstartted";
const Hero = () => (
  <section id='home' className={` flex
   flex-col md:flex-row  ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16px px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-gray-900 rounded-[10px] mb-2 text-white'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px] ' />
        <p className={`${styles.paragraph} ml-2 `}>
        <span className='text-white'>20%</span>
        {" "}
        Discount For {" "}
        <span className='text-white'>1 Month</span>{" "}
Account
        </p>
       
      </div>
<div className='flex flex-row justify-between w-full items-center'>
  <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
    The Next 
    < br className='sm:block hidden' />{" "}
    <span className='text-blue-300'>Generation</span>{" "}
    < br className='sm:block hidden' />{" "}

    Payment Method 

  </h1>
  <div className='ss:flex  md:mr-4 mr-0'>
    <Getstartted/>
  </div>

</div>
    </div>

  </section>
)

export default Hero