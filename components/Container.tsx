// Modules
import React, { ReactNode } from 'react';

// Components
import Navbar from './Navbar';

// Classes
import { container } from '../classes/index';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <Navbar />
      <div className='p-6 pt-20 w-full'>{children}</div>
    </>
  );
}
