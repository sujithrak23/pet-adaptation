import React from 'react';
import Navbar from '../Components/Navbar';
import  "./Pets.css";

export default function Cats() {
    const cat_details = [
        {
            url:"https://img.freepik.com/free-photo/view-adorable-kitten-outdoors_23-2150758146.jpg?t=st=1719652010~exp=1719655610~hmac=55f51e55859c1ea1b40ebc09691e3181bf9773d4f23228369426edb6b5d9a0d2&w=900",
            title: "Siamese Cat"
        },
        {
            url:"https://img.freepik.com/free-photo/cute-furry-cat-relaxing-indoors_23-2150679204.jpg?t=st=1719652079~exp=1719655679~hmac=50a0a3a3bf0760c46fbbec421c80b93fbf4c3c078136ca3570138226ad4c3521&w=1060",
            title:"British Shorthair"
        },
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Rr4V9UkkPakFZk__s0rD7fM_CjiAlwrP5UU6Yde5Z1WhcV37",
            title:"Maine Coon"
        },
        {
            url:"https://img.freepik.com/free-photo/adorable-cat-lifestyle_23-2151593315.jpg",
            title:"Persian cat"
        },
        {
            url :"https://i.pinimg.com/564x/af/a5/fc/afa5fc3f28553ce288ebfb28c4f9000c.jpg",
            title:"Ragdoll"
        },
        {
            url:"https://img.freepik.com/premium-photo/portrait-cat-standing-floor-home_1048944-18257808.jpg?uid=R131645230&ga=GA1.1.1524638804.1719644340&semt=ais_user",
            title:"Sphynx cat"
        },
        {
            url:"https://img.freepik.com/premium-photo/abyssinian-cat-sitting-windowsill_199232-634.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Abyssinian"
        },
        {
            url:"https://img.freepik.com/premium-photo/portrait-cat-sitting-floor_1048944-28346138.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"American Shorthair"
        },
        {
            url:"https://img.freepik.com/free-photo/adorable-cat-lifestyle_23-2151593299.jpg?uid=R131645230&ga=GA1.1.1524638804.1719644340&semt=ais_user",
            title:"Burmese cat"
        },
        {
            url:"https://i.pinimg.com/564x/e5/87/6f/e5876fb3bd6d5e905398d02ded8ef971.jpg",
            title:"Exotic Shorthair"
        },
        {
            url:"https://img.freepik.com/free-photo/close-up-beautiful-pet-cat_23-2150285612.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Scottish Fold"
        },
        {
            url:"https://img.freepik.com/free-photo/closeup-brown-striped-cat-field-sunlight-daytime-with-blurry-background_181624-23873.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Siberian cat"
        }
    ]
  return (
    <>
    <Navbar/>
        <div className="pet--cards">
            {cat_details.map((item, index) => (
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
  )
}
