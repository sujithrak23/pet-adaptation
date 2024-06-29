import React from 'react';
import Navbar from '../Components/Navbar';
import  "./Pets.css";

export default function Dogs() {
    const dog_details = [
        {
            url: "https://img.freepik.com/free-photo/selective-focus-shot-adorable-german-shepherd-outdoors-daylight_181624-36837.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title: "German Shepherd"
        },
        {
            url:"https://img.freepik.com/premium-photo/cute-pug-playing-outdoor-copy-space_198067-36781.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Bulldog"
        },
        {
            url:"https://img.freepik.com/free-photo/best-friend-forever-english-cocker-spaniel-young-dog-is-posing-cute-playful-brown-doggy-pet-is-lying-wooden-floor-isolated-blue-background-concept-motion-action-movement-pets-love_155003-37247.jpg?t=st=1719640895~exp=1719644495~hmac=ac526636e2b6595cf7a322be1e71e5cef0fc5f4142b3c7de088fd7a5ba8092c8&w=900",
            title:"Labrador Retriever"
        },
        {
           url:"https://img.freepik.com/free-photo/shallow-focus-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-26422.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
           title:"Golden Retriever"
        },
        {
           url:"https://img.freepik.com/free-photo/adorable-french-bulldog-lying-down-green-grass-park_181624-55372.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
           title:"French Bulldog"
        },
        {
          url: "https://img.freepik.com/free-photo/wolf-natural-environment_23-2150526698.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
          title:"Siberian Husky"
        },
        {
            url:"https://img.freepik.com/free-photo/woman-walking-autumn-park-happy_1303-2607.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Beagle"
        },
        {
            url:"https://img.freepik.com/premium-photo/poodle-is-sitting-grass-park-professional-advertising-post-photo-ai-generated_755721-40570.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Poodle"
        },
        {
            url:"https://img.freepik.com/free-photo/african-wild-dog-standing-bush-field-ready-hunt_181624-17244.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Australian Cattle"
        },
        {
            url:"https://img.freepik.com/free-photo/portrait-black-labrador-dog-taken-against-dark-backdrop_155003-5191.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Great dane"
        },
        {
            url:"https://img.freepik.com/free-photo/portrait-cute-boxer-dog_181624-47633.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Boxer"
        },
        {
            url:"https://img.freepik.com/free-photo/spitz-dog-posing_155003-2340.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Bichen Frice"
        }
    ];

    return (
        <>
        <Navbar/>
            <div className="pet--cards">
                {dog_details.map((item, index) => (
                    <div className="pet--card" key={index}>
                        <img className="pet--img" src={item.url} alt={item.title} />
                        <p>{item.title}</p>
                        <div className="card--actions">
                            <button className="login">View details</button>
                            <span className="like-icon"><i className="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
