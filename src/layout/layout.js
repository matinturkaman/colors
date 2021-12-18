import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
