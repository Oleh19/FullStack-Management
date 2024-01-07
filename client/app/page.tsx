'use client';
import React, { FC, useState } from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';
import Hero from './components/Hero';

interface Props {}

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className='h-screen'>
      <Heading
        title='Learning website'
        description='Platform for students to learn and get help from teachers'
        keywords='Programming, MERN, Next, Redux, Full-Stack'
      />
      <Header open={open} activeItem={activeItem} setOpen={setOpen} />
      <Hero />
    </div>
  );
};

export default Page;
