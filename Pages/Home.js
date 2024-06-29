import React from 'react';
import FeaturedPages from './FeaturedPages';
import About from './About';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="home">
      <div style={{display:"flex",flexDirection:"row",backgroundColor:'rgb(251, 245, 235)',justifyContent:"space-around"}}>
        <h5>Become A pet-sitter</h5>
        <h5>List Your Pet-sit Opportunity</h5>
      </div>
       <Navbar/>
       <Header/>
       <About/>
       <FeaturedPages/>
       <Footer/>
    </div>
  );
}

export default Home;
