import '../App.css'
import PortraitCard from '../components/PortraitCard'
import ProjectCard from '../components/ProjectCard'
import tenziesImg from "/src/assets/tenzies.png"
import ProfilePic from "/src/assets/ProfilePic.jpg"
import businessImg from "/src/assets/business-card.png"
import dialagueDashImg from '/src/assets/dd-img.gif'
import { useEffect, useState } from 'react'



export default function Home(){

    return(
    <div className="page--container">
        <PortraitCard 
        img={ProfilePic}
        />
        
        <ul className='project--container'>
            <h1 className='project--header'>Projects</h1>
            <div className='cards'>
                <li>
                    <ProjectCard className="project--item"
                    projectTools="React | CSS | JS | HTML"
                    projectName="Tenzies"
                    description="Tenzies is a game that involves matching 10 dice to the same number; you must freeze dice and roll the rest until all the frozen dice are the same value."
                    img={tenziesImg}
                    projectLink=""/>
                </li>
                <li>
                    <ProjectCard className="project--item"
                    projectTools="React | CSS | JS | HTML"
                    projectName="My Business Card"
                    description="A business card that I made in React as an exercise in css and React"
                    img={businessImg}/>
                </li>
                <li>
                    <ProjectCard className="project--item"
                    projectTools="Unity | C# | Wit.ai"
                    projectName="Dialogue Dash"
                    description="A game made in Unity that incorporates a spoken dialogue system to emulate the experience of being a waiter."
                    img={dialagueDashImg}/>
                </li>
            </div>
        </ul>        
    </div>
    )
}