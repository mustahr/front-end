// import getTrips from "@/actions/get-trips";
import { Services } from "@/components/sections/services";
import { DiscoverNature } from "@/components/sections/discover-nature";
import { OurFeatures } from "@/components/sections/our-features";
import Slider from "@/components/slider";
import { PlanEasy } from "@/components/sections/plan-easy";
import { Revolutionising } from "@/components/sections/revolutionising";

const HomePage = async () => {

  // const trips = await getTrips();

  return (
    <>
      <Slider />
      <DiscoverNature />
      <OurFeatures />
      <Services />
      <PlanEasy />
      <Revolutionising />
    </>
    // <Slider data={trips} />
  );
}

export default HomePage;