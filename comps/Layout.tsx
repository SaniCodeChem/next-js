import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

export type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
