import "./App.css";
import BetterSection from "./components/BetterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowThisWorks from "./components/HowThisWorks";
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
      </main>
    </>
  );
}

export default App;
