import { Footer, Navbar } from '../Components/Index.js';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../Sections/Index.js';

const Page = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="z-0 gradient-04" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="z-0 gradient-04" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
