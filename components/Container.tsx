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
      <div className='px-6 pt-20 pb-10 md:pb-10 md:p-20 w-full'>{children}</div>
    </>
  );
}
