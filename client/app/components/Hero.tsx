import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

const Hero: FC = (props) => {
  return (
    <div className='grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 h-100% 1000px:pt-[10vh]'>
      <div className='place-self-center lg:col-span-7 400px:mt-20 300px:mt-10'>
        <h1 className='max-w-2xl my-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black dark:text-white '>
          Improve your Learning Experience Better Instantly
        </h1>
        <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
          We have 19k Online courses & 500k registered students.
        </p>
        <div>
          <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative '>
            <input
              type='search'
              placeholder='Search Courses...'
              className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin'
            />
            <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]'>
              <BiSearch className='text-white' size={30} />
            </div>
          </div>
          <br />
          <br />

          <div className='c1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center'>
            <p className='font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]'>
              <Link
                href='/courses'
                className='dark:text-[#46e256] text-[crimson]'
              >
                View Courses
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='hidden relative lg:flex lg:mt-0 lg:col-span-5'>
        <div className='absolute right-unset h-full w-full hero_animation rounded-full' />
        <div className='flex items-center justify-center z-10 w-full h-full '>
          <Image
            src={require('../../public/assets/banner-img.png')}
            alt='Banner image'
            className='object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
