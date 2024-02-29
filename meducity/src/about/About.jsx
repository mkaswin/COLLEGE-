import React from 'react'
import './about.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure iusto dolore laudantium. Rerum possimus fugit quibusdam ipsam tempore repudiandae dolore consequuntur totam, inventore cupiditate distinctio consequatur at vitae. Quas?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat fuga cumque quos neque sit, sed corrupti deserunt voluptatem, expedita praesentium molestiae? Nihil tenetur error dolore deserunt repellendus numquam fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae excepturi. Maxime error, labore dolor dolores deserunt ea dolorum esse ipsam molestias commodi. Placeat asperiores, tempore eligendi vero magnam porro.
        </p>
      </div>
    </div>
  )
}

export default About