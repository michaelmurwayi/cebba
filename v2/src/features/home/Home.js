import react from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import initialState from "../../state/initialState";

const Home = () => {
  const { HomePage, companyInfo } = initialState;
  return (
    <div>
      <Navbar />
      <Header
      title = {companyInfo.name}
      bgImage={HomePage.header.bgImage}
    />
    </div>
  );
}  

export default Home;