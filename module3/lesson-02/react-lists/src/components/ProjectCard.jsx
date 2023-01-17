function ProjectCard(props){
    return (
        <div key={props.project._id}>
            <h3>{props.project.name}</h3>
            <p>Tech Stack: {props.project.techStack}</p>
      </div>
    )
}

export default ProjectCard;