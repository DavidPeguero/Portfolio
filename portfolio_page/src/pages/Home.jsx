import React from "react";
import './Home.css';
import ProjectCard from "../components/ProjectCard";
import myImg from "../assets/ProfilePic.jpg"
import '../App.css'
import tenziesImg from '../assets/tenzies.png'
import ddImg from '../assets/dd-img.gif'
import businessImg from '../assets/business-card.png'
import ScrollTop from "../components/ScrollTop";

export default function Home(){
    return (
        <div className="page-style">
            <div className="container bg-brown">
                <header>
                    <div className="header-text">
                        <h4>David Peguero</h4>
                        <p>I love reading, programming, learning new skills, and video games. I am am a Full Stack dev with ambition in bettering UI/UX.
                        
                        </p>
                    </div>
                    <div className="header-img"><img src={myImg} placeholder="MyPic"></img></div>
                </header>
            </div>
            <div className="container">
                <ProjectCard 
                bgColor="bg-dark"
                title="Tenzie"
                tools="React | CSS | JS | HTML"
                description="Tenzies is a game that involves matching 10 dice to the same number; you must freeze dice and roll the rest until all the frozen dice are the same value."
                imgFirst={false}
                img={tenziesImg}
                />
            </div>
            <div className="container">
                <ProjectCard 
                bgColor="bg-white"
                title="React Business Card"
                tools="React | CSS | JS | HTML"
                description="A business card that I made in React as an exercise in CSS and React"
                imgFirst={true}
                img={businessImg}
                />
            </div>
            <div className="container">
                <ProjectCard 
                    bgColor="bg-brown"
                    title="DialogueDash"
                    tools="Unity | C# | Wit.ai"
                    description="A business card that I made in React as an exercise in css and React"
                    imgFirst={false}
                    img={ddImg}
                />
            </div>
            <ScrollTop />
        </div>
    )
}