import { redirect } from 'next/navigation';
import UserAuth from './userAuth';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Protected({ children }: Props) {
  const isAuthenticated = UserAuth();

  return isAuthenticated ? children : redirect('/');
}
