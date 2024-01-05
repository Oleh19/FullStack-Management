'user client';
import React, { FC, useState } from 'react';
import Heading from './utils/Heading';

interface Props {}

const Page: FC<Props> = () => {
  return (
    <div>
      <Heading
        title='Learning website'
        description='Platform for students to learn and get help from teachers'
        keywords='Programming, MERN, Next, Redux, Full-Stack'
      />
    </div>
  );
};

export default Page;
