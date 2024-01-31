'use client';
import React, { FC, useState } from 'react';
import SideBarProfile from './SideBarProfile';
import { useLogOutQuery } from '../../../redux/features/auth/authApi';
import { signOut } from 'next-auth/react';
import ProfileInfo from './ProfileInfo';

interface Props {
  user: any;
}

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const [logout, setLogout] = useState(false);

  const {} = useLogOutQuery(undefined, { skip: !logout ? true : false });

  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className='text-white w-[85%] flex mx-auto'>
      <div
        className={` mb-4 w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff00] border-[#ffffff00] dark:shadow-sm shadow-xl rounded-[5px]  mt-[80px] sticky ${
          scroll ? 'top-[120px]' : 'top-[30px]'
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      {active === 1 && (
        <div className='w-full h-full bg-transparent mt-[80px]'>
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}
    </div>
  );
};

export default Profile;
