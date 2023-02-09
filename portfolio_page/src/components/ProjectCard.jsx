export default function ProjectCard(props){
    return (
        // <div className="card--container project face">
        //     <div className='card--text-container project--text'>
        //         <h2>{props.projectTools}</h2>
                
        //             <h1><a href="http://david-peguero-tenzies.netlify.app">{props.projectName}</a></h1>

        //         <h3>{props.description}
                
        //         </h3>
        //     </div>
        //     <img className='project--portrait' src={"" || props.img} ></img>
        
        // </div>
        <div>
            <a href={props.projectLink} className="card">
            <img src={props.img} className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <div className="card__header-text">
                    <h3 className="card__title">{props.projectName}</h3>
                </div>
                </div>
                <p className="card__description">{props.description}</p>
            </div>
            </a> 
        </div>
    )
}