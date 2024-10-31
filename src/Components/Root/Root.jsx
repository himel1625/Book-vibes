import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';

const Root = () => {
  return (
    <>
      <div className="mx-w-[1440px] mx-auto sm:mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
