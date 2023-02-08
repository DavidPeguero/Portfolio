

export default function PortraitCard(props){
    return (
        <div className="card--container">
            <div className='card--text-container'>
                <h2>Software Developer | Full Stack</h2>
                <h1>David Peguero</h1>
                <h3>I am dedicated developer who has experience in both Frontend and Backend 
                    experience. I have expereience in game design and site design throughout my career
                    as a developer. I am currently working to finish my Bachelor's at the University of Florida. 
                </h3>
            </div>
            <img className='card--portrait' src={"" || props.img}></img>
        </div>
    )
}