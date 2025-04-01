import react from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import initialState from "../../state/initialState";
import Into from "../../components/intro/Intro";

const Home = () => {
  const { HomePage, companyInfo } = initialState;
  return (
    <div>
      <Navbar />
      <Header
      title = {companyInfo.name}
      bgImage={HomePage.header.bgImage}
    />
    <Into />
    </div>
  );
}  

export default Home;