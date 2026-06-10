import "./App.css";
import BetterSection from "./components/BetterSection";
import FAQSection from "./components/FAQSection";
import FriendsBanner from "./components/FriendsBanner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowThisWorks from "./components/HowThisWorks";
import ThreeDayBanner from "./components/ThreeDayBanner";
import TrainerSection from "./components/TrainerSection";
import WhoSection from "./components/WhoSection";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <main>
        <HowThisWorks></HowThisWorks>
        <BetterSection></BetterSection>
        <WhoSection></WhoSection>
        <TrainerSection></TrainerSection>
        <ThreeDayBanner></ThreeDayBanner>
        <FriendsBanner></FriendsBanner>
        <FAQSection></FAQSection>
      </main>
    </>
  );
}

export default App;
