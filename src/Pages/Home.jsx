
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServiceSection'
import Services from '../Components/Services'
import TreemanPromo from '../Components/TreemanPromo'
import TipsAndTricks from '../Components/TipsAndTricks'
import TransformSpace from '../Components/TransformSpace'
import Footer from '../Components/Footer'
import Clients from '../Components/Clients'
import ProductsSlid from '../Components/ProductsSlid'

const Home = () => {
    return (
       
<>
<Navbar/>
  <HeroSection/> 
  <ServicesSection/>
 <ProductsSlid/>
  <Services/>
  <TreemanPromo/>
 <TipsAndTricks/>
 <TransformSpace/>
 <Footer/>

</>

    );
};

export default Home;