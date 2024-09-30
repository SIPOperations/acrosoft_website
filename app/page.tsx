import Banner from '../components/Banner';
// import Sponsers from '../components/Sponsers'
import Services from '../components/Services'
import Work from '../components/Work'
import Digital from '../components/Digital'
import Project from '../components/Project'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Sponsers /> */}
      <Services />
      <Work />
      <Digital />
      <Project />
      <Carousel />
    </div>
  );
}
