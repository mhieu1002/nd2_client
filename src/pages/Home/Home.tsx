import Carousel from "../../components/Carousel";
import Departments from "../../components/Departments";
import Achievements from "../../components/Achievements";
import Doctors from "../../components/Doctors";
import Videos from "../../components/Videos";
import News from "../../components/News";
import Letters from "../../components/Letters";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nhi đồng 2 - Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Carousel />
        <Departments />
        <Doctors />
        <News />
        <Videos />
        <Letters />
        <Achievements />
      </div>
    </HelmetProvider>
  );
};

export default Home;
