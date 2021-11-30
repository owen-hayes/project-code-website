import React from 'react'
import {useState} from 'react'
import Slider from 'react-slick'
import Profile from './Profile.js'
import './ProfilePage.css';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const Profiles = () => {
  const Kuro = [
    "Ichigo", 
    "Blah blah blah blah blah blah blah blah", 
    "https://pbs.twimg.com/profile_images/723189645136162819/A8Wnf7xu_400x400.jpg"
  ];
  const Mob = [
    "Mob",
    "kjashdf as;jdflas laskjdflas alksjfdlas kjfdnasf lasjdf",
    "https://i.pinimg.com/474x/d7/80/c0/d780c0561f65363f73bd354c359c71fd.jpg"
  ]
  const Kisuke = [
    "Kisuke",
    "piower powierpi oiwerpoqiw piertpeoi pwoeirpqowier p aldjfl lskajflaskf alskdjfalskjfda lakjsdflkajsd lkjsadfljasdf akjdsfhklasjhdfkahskldfjashdfklahsdkfhaksdhjfahsink vfklhadflkva fkajhdfk;lvnakd nfvkajh;dfhvav d",
    "https://pbs.twimg.com/profile_images/587517723929739264/1XpWFmch_400x400.jpg"
  ]
  
  const profiles = [Kuro, Mob, Kuro, Mob, Kuro, Kisuke, Mob, Kuro, Kisuke, Mob];

  const NextArrow = ({onClick}) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }
  const PrevArrow = ({onClick}) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  //tracking image index:
  const [profileIndex, setProfileIndex] = useState(0);

  //Settings for our slider
  const settings = {
    infinite: true,
    speed: 300,
    variableWidth: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current,next) => setProfileIndex(next),
  };
  return(
    <div >
      <Slider {...settings}>
        {profiles.map((profile, index) => (
          <div className={index == profileIndex ? "slide activeSlide" : "slide"}>
            <Profile
              name = {profile[0]}
              info = {profile[1]}
              image = {profile[2]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Profiles;