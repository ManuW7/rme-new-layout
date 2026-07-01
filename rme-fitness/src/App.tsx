import { useState } from "react";
import "./App.css";
import AppModal from "./components/AppModal";
import BetterSection from "./components/BetterSection";
import CooperationModal from "./components/CooperationModal";
import DocumentPage from "./components/DocumentPage";
import { documents, type DocumentPath } from "./components/documentPages";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FriendsBanner from "./components/FriendsBanner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowThisWorks from "./components/HowThisWorks";
import QuestionsLeft from "./components/QuestionsLeft";
import ThreeDayBanner from "./components/ThreeDayBanner";
import TrainerSection from "./components/TrainerSection";
import WhoSection from "./components/WhoSection";

function App() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isCooperationModalOpen, setIsCooperationModalOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isDocumentPath = currentPath in documents;

  const openAppModal = () => setIsAppModalOpen(true);
  const closeAppModal = () => setIsAppModalOpen(false);
  const openCooperationModal = () => setIsCooperationModalOpen(true);
  const closeCooperationModal = () => setIsCooperationModalOpen(false);

  return (
    <>
      <Header
        onOpenAppModal={openAppModal}
        onOpenCooperationModal={openCooperationModal}
      ></Header>
      {isDocumentPath ? (
        <DocumentPage path={currentPath as DocumentPath}></DocumentPage>
      ) : (
        <>
          <HeroSection onOpenAppModal={openAppModal}></HeroSection>
          <main>
            <HowThisWorks></HowThisWorks>
            <BetterSection></BetterSection>
            <WhoSection></WhoSection>
            <TrainerSection onOpenAppModal={openAppModal}></TrainerSection>
            <ThreeDayBanner onOpenAppModal={openAppModal}></ThreeDayBanner>
            <FriendsBanner></FriendsBanner>
            <FAQSection></FAQSection>
            <QuestionsLeft></QuestionsLeft>
          </main>
        </>
      )}
      <Footer
        onOpenAppModal={openAppModal}
        onOpenCooperationModal={openCooperationModal}
      ></Footer>

      {isAppModalOpen && <AppModal onClose={closeAppModal}></AppModal>}
      {isCooperationModalOpen && (
        <CooperationModal onClose={closeCooperationModal}></CooperationModal>
      )}
    </>
  );
}

export default App;
