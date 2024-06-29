import React from 'react'
import './index.css'; 
import {Link} from "react-router-dom";
export default function FeaturedPages() {
  
return (
    <main style={{ backgroundColor: 'rgb(251, 245, 235)' }}>
      
      <section className="featured-pets">
      <h2>Featured Pets</h2>
        <div className="pet-cards">
          <div className="pet-card">
            <img 
            src="https://img.freepik.com/free-photo/kooikerhondje-dogs-portrait_1409-4234.jpg?t=st=1719549379~exp=1719552979~hmac=23a1fd8c21b23865a5e14ec218e82a7202650b4a8c14f973f256780033bd8642&w=900" 
            alt="Featured Pet 1" />
            <h3>Dogs</h3>
            <Link to="/dog">
             <a  className="adopt-btn">Adopt Dog</a>
            </Link>
          </div>
          <div className="pet-card">
            <img
             src="https://img.freepik.com/free-photo/cute-soft-kittens-with-bright-eyes-lined-up-eager-fun_157027-4369.jpg?t=st=1719549809~exp=1719553409~hmac=d6ea6f780551b4548298ec5122373146c56d7d7bf62d1dfb19ba586787cbebf2&w=1380" 
             alt="Featured Pet 2" />
            <h3>Cats</h3>
            <Link to="/cat">
            <a  className="adopt-btn">Adopt Cat</a>
            </Link>
          </div>
          <div className="pet-card">
            <img
             src="https://images.pexels.com/photos/1599452/pexels-photo-1599452.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="Featured Pet 3" />
            <h3>Birds</h3>
            <Link to="/bird">
            <a className="adopt-btn">Adopt Birds</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="pet-care-products">
        <h2 style={{textAlign:"center",marginBottom:"3%",color:'#333'}}>Pet Care Products</h2>
        <div className="product-cards">

          <div className="product-card">
            <a href="/"><img src="https://img.freepik.com/premium-photo/freepik-image-photo-2023-white-background-isolated-wallpaper-texture-photo-image-2024_873925-230229.jpg?w=740"
             alt="Product 1" style={{marginBottom:"-5%"}}/></a>
            <h3 >Dog Products</h3>
            <a href="" className="buy-btn">Buy Now</a>
          </div>

          <div className="product-card">
            <a href="/"><img src="https://img.freepik.com/premium-photo/cute-cat-with-towel-grooming-tools-isolated_392895-16927.jpg?w=996"
             alt="Product 2" 
             style={{height:"70%",width:"100%",}}/></a>
            <h3>Cat Products</h3>
            <a href="" className="buy-btn">Buy Now</a>
          </div>

          <div className="product-card">
            <a href="/"><img src="https://img.freepik.com/premium-photo/blue-bird-perched-wooden-birdhouse_1123470-13274.jpg?w=996"
            alt="Product 3" style={{height:"60%",width:"100%",marginBottom:"9%",marginTop:"7%"}}/></a>
            <h3>Birds Products</h3>
            <a href="/" className="buy-btn">Buy Now</a>
          </div>
        </div>
      </section>

    </main>
  )
}
