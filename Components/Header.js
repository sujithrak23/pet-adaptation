import React from 'react'

export default function Header() {
  return (
    <>
    <div className="content">
          <div className="text-content">
            <div className="rating">
              <span role="img" aria-label="star">⭐</span> 5 Star Ratings (970 Reviews)
            </div>
            <h1>Let Us Take Care Of Our Pets!</h1>
            <p> 
            Humane Animal Society (HAS) was established in April 2006 as a non-profit trust under the Indian Trust Act to 
            address the welfare of stray animals in the city of Coimbatore, Tamil Nadu, India. This we do through animal birth 
            control and anti-rabies drives, and by rescuing animals that are in urgent need of treatment. </p>
            <button className='login'>Book a Pet</button>
          </div>
          
          <div className="image-content">
            <img src="https://cdn.pixabay.com/photo/2019/09/21/18/58/dog-4494554_1280.jpg"
            alt="Pet Care" />
          </div>
        </div>

        </>  
  )
}
