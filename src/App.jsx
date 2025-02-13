import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
          {/* StarsCanvas rendered globally */}
          <StarsCanvas />
          
          {/* Main Content */}
            <Navbar />
            <Hero />
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
