const ProjectList = () => {
    
    const projects = [
        // {name: "404 Page", url: './404'},
        // {name: "Admin Page", url: './admin'},
        {name: "Blogger Page", url: 'https://ecmcode.github.io/blogger'},
        {name: "Todo List", url: 'https://ecmcode.github.io/todolist/'},
    ]

    return(
        <div className="w-full sm:w-2/3">
            <ul className="flex flex-col gap-10">
                {projects.map((project,index) => 
                    <li key={index} className="w-full flex justify-between items-center border-b-0 sm:border-b-2 border-secondary">
                        <h4 className="break-words">{project.name}</h4>
                        <a href={project.url}  target="_blank">
                            <button className="w-auto px-10 md:px-20 rounded-none shadow-none">Visit</button>
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