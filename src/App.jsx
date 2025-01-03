import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* StarsCanvas rendered globally */}
          <StarsCanvas />
          
          {/* Main Content */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Experience /> */}
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
