import React, { useEffect, useRef } from "react";
import './Styles/Home.css';
import ProjectCard from "../components/ProjectCard";
import myImg from "../assets/ProfilePic.jpg"
import '../App.css'
import tenziesImg from '../assets/tenzies.png'
import ddImg from '../assets/dd-img.gif'
import businessImg from '../assets/business-card.png'

export default function Home(){
    useEffect(()=>{
        console.log("Mount")
        return () =>{
            console.log("Unmount")
        }
    }, [])

    const header = useRef(null)
    const project1 = useRef(null)
    const project2 = useRef(null)
    const project3 = useRef(null)


    function handleScrollToHeader(){
        header.current.scrollIntoView({
            behavior : 'smooth',
            block:'start',
            inline: 'center',
        })
    }

    function handleScrollToP1(){
        project1.current.scrollIntoView({
            behavior : 'smooth',
            block:'start',
            inline: 'center',
        })
    }

    function handleScrollToP2(){
        project2.current.scrollIntoView({
            behavior : 'smooth',
            block:'start',
            inline: 'center',
        })
    }

    function handleScrollToP3(){
        project3.current.scrollIntoView({
            behavior : 'smooth',
            block: 'start',
            inline: 'center',
        })
    }

    return (
        <div className="page-style">
            {/* <nav className="table-of-contents">
                <button onClick={handleScrollToHeader}>
                Header
                </button>
                <button onClick={handleScrollToP1}>
                Tenzies
                </button>
                <button onClick={handleScrollToP2}>
                React Business Card
                </button>
                <button onClick={handleScrollToP3}>
                Dialogue Dash
                </button>
            </nav> */}
            <div className="container bg-brown" ref={header}>
                <header>
                    <div className="header-text">
                        <div className="diagonal-text-flourish"></div>
                        <h1>David Peguero</h1>
                        <p>I love reading, programming, learning new skills, and video games. I am am a Full Stack dev with ambition in bettering UI/UX.
                        </p>
                    </div>
                    <div className="header-img"><img src={myImg} placeholder="MyPic"></img></div>
                </header>
            </div>
            <div className="container bg-dark" ref={project1}>
                <ProjectCard 
                bgColor=""
                link="https://david-peguero-tenzies.netlify.app/"
                title="Tenzies"
                tools="React | CSS | JS | HTML"
                description="Tenzies is a game that involves matching 10 dice to the same number; you must freeze dice and roll the rest until all the frozen dice are the same value."
                imgFirst={false}
                img={tenziesImg}
                reverse={false}
                />
            </div>
            <div className="container bg-white" ref={project2}>
                <ProjectCard 
                bgColor=""
                link="https://davidpegueroinfo.netlify.app/"
                title="React Business Card"
                tools="React | CSS | JS | HTML"
                description="A business card that I made in React as an exercise in CSS and React"
                imgFirst={true}
                img={businessImg}
                reverse={true}
                />
            </div>
            <div className="container bg-brown" ref={project3}>
                <ProjectCard 
                    bgColor=""
                    link="https://github.com/CWolfe1320/dialoguedash"
                    title="DialogueDash"
                    tools="Unity | C# | Wit.ai"
                    description="A business card that I made in React as an exercise in css and React"
                    imgFirst={false}
                    img={ddImg}
                    reverse={false}
                />
            </div>
        </div>
    )
}