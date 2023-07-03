import Banner from './components/Banner';
import BannerTwo from './components/BannerTwo'
import BannerThree from './components/BannerThree'
import BannerFour from "./components/BannerFour"


import Body from './components/Body';
import Footer from './components/Footer';
import Main from './components/Main';

import './styles/App.css';


const bannerMaterialOne = {
  title: "Black Jacket", 
  content: "guess??",
  bgColor: "cyan",
  fontColor: "gray",
}

const bannerMaterialTwo = {
  title: "tied shirt",
  content: "roam the unknown",
  bgColor: "grey",
  color: "orange"
}




function App() {
  return (
    <>
    <Main />
    <Body />
    <Banner 
      title="blue Sweater" 
      content="I Wear White Shoes"
      bgColor="pink"
      fontColor="red"
      />
    <Banner 
      title="Grey Sweater" 
      content="I Wear Pink sock"
      bgColor="blue"
      fontColor="white"

      />

        <BannerTwo
          info= {bannerMaterialOne}
         />

    <BannerThree
    info= {bannerMaterialTwo}
    />

    <BannerFour  
    howMany = {3}
    shirt="puma"
    data= {bannerMaterialOne}
    />

    <Footer />
    </>
  );
}

export default App;
