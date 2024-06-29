import React from 'react'
import './index.css'
export default function() {
  return (
    <div className='about'>
      <div className="aboutheader" >
        <h1>Your Pet Adoption Journey With Purr & Paws</h1>
      </div>
      <main style={{ backgroundColor:"whitesmoke", display: 'flex', alignItems: 'center' }}>
        {/* Image on the left */}
        <div style={{ flex: 1 }}>
          <a href="aboutimg">
            <img
              src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
              alt="abtimg"
              style={{ width: "500px", height: "500px", marginLeft: "15%", maxWidth: "100%" }}
            />
          </a>
        </div>
        <div className="aboutpara" style={{ flex:1,marginRight: "8%"}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1130/1130981.png"
              alt="icon1"
              style={{ width: "45px", height: "45px", marginRight: "3%" }}
            />
            <div>
              <h3>Search Pet</h3>
              <p >Adopt a dog or cat or bird who's right for you. Simply enter your city above to start your search.</p>
            </div>
          </div>

        
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1072/1072181.png"
              alt="icon2"
              style={{ width: "45px", height: "45px", marginRight: "10px", marginRight: "3%"  }}
            />
            <div>
              <h3>Connect</h3>
              <p>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
            </div>
          </div>

          {/* Icon 3 */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/12482/12482718.png"
              alt="icon3"
              style={{ width: "45px", height: "45px", marginRight: "10px", marginRight: "3%"  }}
            />
            <div>
              <h3>AdoptLove</h3>
              <p>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
            </div>
          </div>

          {/* Icon 4 */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/10187/10187707.png"
              alt="icon4"
              style={{ width: "45px", height: "45px", marginRight: "10px", marginRight: "3%"  }}
            />
            <div>
              <h3>Free Vet Consultation</h3>
              <p>The Pet Nest will help your pet to settle down in its new home. Once you complete the adoption journey, reach out to us for a free vet consultation.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
