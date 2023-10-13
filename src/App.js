import "fontsource-poppins/400.css"; // Use 400 for Regular font weight
import "fontsource-poppins/700.css"; // Use 700 for Bold font weight

import "fontsource-poppins/800.css"; // Use 800 for Extra Bold font weight
// In your CSS or JavaScript file
import "typeface-inter";
import "typeface-poppins";

import HomePage from "./HomePage/HomePageMain";
import EventPlannerMain from "./1eventplanner/EventPlannerMain";
import WhyPayForSection from "./AVProviders/WhyPayForSection";
import HowtoGetStarted from "./AVProviders/Howtogetstarted";
import OurResults from "./AVProviders/OurResults";

export default function App() {
  return (
    <div>
      <HomePage />
      {/* <EventPlannerMain /> */}
      {/* <HowtoGetStarted /> */}
      {/* <OurResults /> */}
    </div>
  );
}
