import React from 'react';
import Navbar from '../Components/Navbar';
import  "./Pets.css";

export default function Birds() {
    const bird_details = [
        {
            url:"https://img.freepik.com/free-photo/closeup-shot-common-kingfisher-bird-perched-branch-fixing-its-plumage_181624-37383.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title: "Psittacine"
        },
        {
            url:"https://img.freepik.com/free-photo/matching-pair-amazon-parrots-perch_493961-1529.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Parakeets"
        },
        {
            url:"https://img.freepik.com/free-photo/closeup-gray-hawk-perched-tree-branch_181624-51136.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Cockatiel"
        },
        {
            url:"https://img.freepik.com/free-photo/group-colorful-macaws-engaged-vibrant-midday-chatter-amid-lush-foliage_1268-34983.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Amazon Parrots"
        },
        {
            url :"https://img.freepik.com/free-photo/closeup-pigeon-sunlight-blue-sky-with-blurry-scene_181624-48046.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"American Grey  Parrots"
        },
        {
            url:"https://img.freepik.com/free-photo/closeup-macaw-parrot-perched-branch_181624-45970.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Macaw"
        },
        { 
            url:"https://img.freepik.com/premium-photo/african-grey-parrot_726120-5867.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Cockatoo"
        },
        {
            url:"https://img.freepik.com/free-photo/affectionate-birds-sitting-together-branch_23-2150984408.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Lovebirds"
        },
        {
            url:"https://img.freepik.com/free-photo/selective-focus-wood-pigeon-new-zealand_181624-23648.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Lorikeet"
        },
        {
            url:"https://img.freepik.com/free-photo/closeup-rainbow-loriini-sitting-wooden-plank_181624-14637.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Conures"
        },
        {
            url:"https://img.freepik.com/premium-photo/tailorbird-jungle_862994-365871.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Finch"
        },
        {
            url:"https://img.freepik.com/free-photo/closeup-european-robin-standing-leaf-sunlight_181624-10937.jpg?uid=R154192377&ga=GA1.1.467149738.1719640270&semt=ais_user",
            title:"Mynah Bird"
        }
    ]
  return (
    <>
    <Navbar/>
        <div className="pet--cards">
            {bird_details.map((item, index) => (
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
