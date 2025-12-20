
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <div>
        <Outlet/>
      </div>
    <Footer/>
    </>
  );
};

export default MainLayout;