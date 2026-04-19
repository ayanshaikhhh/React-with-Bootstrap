import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header";
import AppHero from "./components/hero.jsx";
import AppAbout from "./components/about.jsx";
import AppServices from "./components/services.jsx";
import AppWorks from "./components/works.jsx";
import AppTeams from "./components/teams.jsx";
import AppTestimonials from "./components/testimonials.jsx";
import AppPricing from "./components/pricing.jsx";
import AppBlog from "./components/blog.jsx";
import AppContact from "./components/contact.jsx";
import AppFooter from "./components/footer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>

        <main>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppWorks />
          <AppTeams />
          <AppTestimonials />
          <AppPricing />
          <AppBlog />
          <AppContact />
        </main>
        <footer id="footer">
          <AppFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
