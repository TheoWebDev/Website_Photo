// React
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Gallery from "./Pages/Gallery";
import Loading from "./components/Loading/Loading";
// Style
import "../src/dist/styles.css";
// Lazy components
const AboutComponent = lazy(() => import('./Pages/About'));
const ContactComponent = lazy(() => import('./Pages/Contact'));
const ErrorComponent = lazy(() => import('./Pages/ErrorPage'));

function App() {

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="gallery/*" element={<Gallery />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
