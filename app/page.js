import Achievements from "./components/Achievements";
import FaqPart from "./components/FaqPart";
import Flashcards from "./components/Flashcards";
import Header from "./components/Header";
import ReviewSection from "./components/ReviewSection";

export default function Home() {
  return (
 <div className="relative h-[677vh]">
    <Header/>
    <Flashcards />
    <ReviewSection />
    <Achievements />
    <FaqPart />
 </div>
  );
}
