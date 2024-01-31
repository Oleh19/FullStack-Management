'use client';
import React, { FC, useState } from 'react';
import Protected from '../hooks/useProtected';
import Header from '../components/Header';
import Heading from '../utils/Heading';
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';

type Props = {};

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState('Login');
  const {user} = useSelector((state:any) => state.auth)

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile`}
          description='Platform for students to learn and get help from teachers'
          keywords='Programming, MERN, Next, Redux, Full-Stack'
        />
        <Header
          open={open}
          activeItem={activeItem}
          setOpen={setOpen}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
      </Protected>
    </div>
  );
};

export default Page;
