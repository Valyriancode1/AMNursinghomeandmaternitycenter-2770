import { Route, Switch } from "wouter";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import DoctorsPage from "./pages/doctors";
import AppointmentPage from "./pages/appointment";
import TestimonialsPage from "./pages/testimonials";
// GalleryPage removed
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Provider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/doctors" component={DoctorsPage} />
            <Route path="/appointment" component={AppointmentPage} />
            <Route path="/testimonials" component={TestimonialsPage} />
            {/* Gallery removed */}
            <Route path="/blog" component={BlogPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
        <Footer />
      </div>
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}
 // final trigger
export default App;
