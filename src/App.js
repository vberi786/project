import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route , Switch} from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
const Works = lazy(() => import("./Sections/Works/inde"));
// const ProductSlider = lazy(() => import("./components/ProductSlider"));
const Our = lazy(() => import("./Sections/our/our"));
function App() {
  return (
    <>
    <BrowserRouter>
        

            
      <Suspense fallback={null}>
      <Routes>
      <Route path="/new" element={<Our/>} />
      
      </Routes>
        <GlobalStyle />
       
        <ScrollToTop />
        <Header />
        <Home />
        {/* <ProductSlider /> */}
        <Footer />
        
      </Suspense>
      
     
      </BrowserRouter>
    </>
  );
}

export default App;
