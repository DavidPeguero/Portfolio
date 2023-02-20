import '../pages/Styles/Home.css'

export default function ProjectCard(props){
    return (
        <div>
            <section className={props.bgColor}>
                    <div className="split">
                        {props.imgFirst && <div className="split-img">

                            <img src={props.img} alt="Profile Pic" />
                            
                        </div>}
                        <div className="split-text ">
                            <div className={`split-flourish bg-orange ${props.reverse ? "split-flourish-reverse" : ""}`}></div>
                            <h1><a href={props.link} className="split-link">{props.title}</a> </h1>
                            <hr className="solid" />
                            <h4>{props.tools}</h4>
                            <hr className='solid'></hr>
                            <p>{props.description}</p>
                        </div>
                        <div className="split-img">
                            {!props.imgFirst && <img src={props.img} alt="Profile Pic" />}
                        </div>
                    </div>
            </section>
        </div>
    )
}