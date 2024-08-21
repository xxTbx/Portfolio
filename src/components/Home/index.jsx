import AboutMe from "../AboutMe";
import Footer from "../Footer";
import MainSection from "../mainSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";


export default function Home() {
  return (
    <>
      <MainSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Footer />
    </>
  );
}
