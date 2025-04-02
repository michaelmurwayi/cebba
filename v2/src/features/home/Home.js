import react from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import initialState from "../../state/initialState";
import Into from "../../components/intro/Intro";
import Statistics from "../../components/statistics/Statistics";

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
    <Statistics />
    </div>
  );
}  

export default Home;