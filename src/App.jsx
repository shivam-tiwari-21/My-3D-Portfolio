import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
          {/* StarsCanvas rendered globally 
          <div><StarsCanvas /></div>
          */}
        
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
