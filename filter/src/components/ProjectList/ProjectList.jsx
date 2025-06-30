import './ProjectList.css'

function ProjectList ({projects}) {
  return (
    <>
      <div className="projects_list">
        {projects.map((project, ind) => (
          <img
            key={ind}
            src={project.img}
            category={project.category}
            className="item"
          />
        ))}
      </div>
    </>
  )
}

export default ProjectList