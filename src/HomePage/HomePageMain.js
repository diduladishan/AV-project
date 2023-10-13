import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavBar";
import HeroSectionOne from "./HeroSectionOne";
import HeroSectionTwo from "./HeroSectionTwo";
import RecentlyPostedComponent from "./RecentlyPostedEvents";
import WantToGetMore from "./WantToGetMore";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <HeroSectionOne />
      <HeroSectionTwo />
      <RecentlyPostedComponent />
      <WantToGetMore />
      <Footer />
    </div>
  );
}
export default HomePage;
