import '../pages/Home.css'

export default function ProjectCard(props){
    return (
        <div>
            <section className={props.bgColor}>
                    <div className="split">
                        {props.imgFirst && <img src={props.img} alt="Profile Pic" />}
                        <div className="split-text">
                            <h1>{props.title} </h1>
                            <hr className="solid" />
                            <h4>{props.tools}</h4>
                            <hr className='solid'></hr>
                            <p>{props.description}</p>
                        </div>
                        {!props.imgFirst && <img src={props.img} alt="Profile Pic" />}
                    </div>
            </section>
        </div>
    )
}