const ProjectList = () => {
    
    const projects = [
        {name: "404 Page", url: '/404'},
        {name: "Admin Page", url: '/admin'},
        {name: "Blogger Page", url: 'https://ecmcode.github.io/blogger'},
        {name: "Todo List", url: 'https://ecmcode.github.io/todolist/'},
    ]

    return(
        <div className="w-full md:w-1/2">
            <ul className="flex flex-col gap-10">
                {projects.map((project,index) => 
                    <li key={index} className="flex justify-between items-center border-b-2 drop-shadow-md border-secondary">
                        <h4>{project.name}</h4>
                        <a href={project.url}  target="_blank">
                            <button className="px-20 md:px-10 rounded-none shadow-none">Visit</button>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )


}

const Project = () => {
    
    return(
        <div className="flex py-4 px-10 justify-center items-center ">
            <ProjectList />
        </div>    
    )

}

export default Project