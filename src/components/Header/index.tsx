import './style.scss';
import type { ReactNode } from 'react';

// How to add children to components
const Header = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <header>
      <h1>
        Welcome to <span className='company-name'>{title}</span>
        {children}
      </h1>
    </header>
  );
};

export default Header;
