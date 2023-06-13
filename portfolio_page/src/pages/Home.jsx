import React, { useEffect, useRef } from "react";
import './Styles/Home.css';
import ProjectCard from "../components/ProjectCard";
import myImg from "../assets/ProfilePic.jpg"
import '../App.css'
import tenziesImg from '../assets/tenzies.png'
import ddImg from '../assets/dd-img.gif'
import businessImg from '../assets/business-card.png'
import ygoImg from '../assets/ygo.png'
import moImg from '../assets/mental-oasis.png'
import disImg from '../assets/discover-main.png'

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
    const project4 = useRef(null)
    const project5 = useRef(null)


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
    console.log("Hi")
    return (
        <div className="page-style">
            <div className="container bg-brown" ref={header}>
                <header>
                    <div className="header-text">
                        <h1 className="text-3xl underline">David Peguero</h1>
                        <p>I love reading, programming, learning new skills, and video games. I am am a Full Stack developer with a passion for learning new things. I am currently looking for a job as a developer. 
                        </p>
                    </div>
                    <div className="header-img"><img src={myImg} placeholder="MyPic"></img></div>
                </header>
            </div>
            <div className="container bg-white">
                <ProjectCard 
                    bgColor=""
                    link="https://github.com/DavidPeguero/Yugioh-BanListChangeScraper/releases/tag/1.0.0"
                    title="YGO-Forbidden/Limited List Checker"
                    tools="Python | JSON | Web Scraping"
                    description="A program that scrapes Konami's list for the banned cards in the Yugioh Trading Card Game
                    and displays them in a table. It allows for searching cards, displaying images to see what they do, and it can scrap 
                    any of the Konami ban lists, not just the most recent "
                    imgFirst={true}
                    img={ygoImg }
                    reverse={true}
                />
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
            <div className="container bg-brown" ref={project2}>
                <ProjectCard 
                bgColor=""
                link="https://davidpeguero.com/"
                title="React Business Card"
                tools="React | CSS | JS | HTML"
                description="A business card that I made in React as an exercise in CSS and React"
                imgFirst={true}
                img={businessImg}
                reverse={true}
                />
            </div>
            <div className="container bg-white" ref={project3}>
                <ProjectCard 
                    bgColor=""
                    link="https://github.com/CWolfe1320/dialoguedash"
                    title="DialogueDash"
                    tools="Unity | C# | Wit.ai"
                    description="Game built on the Unity engine that integrates a Wit.ai based spoken dialogue
                                system to simulate the experience of being a waiter. The player must be able to take
                                and relay orders and is paid according to performance. "
                    imgFirst={false}
                    img={ddImg}
                    reverse={false}
                />
            </div>
            <div className="container bg-dark " ref={project4}>
                <ProjectCard 
                    bgColor=""
                    link="https://github.com/CoolJH2K/dis-cover-music"
                    title="dis(Cover-Music)"
                    tools="HTML | APIs | CSS | JS"
                    description="Website that allows for easily finding covers to music that you love. Simply input the song you want and it will
                     displays options on a carousel for you."
                    imgFirst={true}
                    img={disImg}
                    reverse={true}
                />
            </div>
            <div className="container bg-brown" ref={project5}>
                <ProjectCard 
                    bgColor=""
                    link="https://github.com/DavidPeguero/Mental-Oasis"
                    title="Mental Oasis"
                    tools="Handlebars | mySQL | Node.js | Express.js"
                    description="Mental Health Tracker that resets everyday and logs how you did each day through coloring a calendar on the dashboard.
                    The applicaition also allows for creating journal entries to keep track of your days."
                    imgFirst={false}
                    img={moImg}
                    reverse={false}
                />
            </div>
        </div>
    )
}