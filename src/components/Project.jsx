const ProjectListItem = ({name,url}) => {
    return(
        <li className="flex justify-between items-center gap-4 border-b-0 sm:border-b-2 border-secondary">
            <h4 className="break-words">{name}</h4>
            <a href={url}  target="_blank">
                <button className="px-10 md:px-20 rounded-none shadow-none">
                    Visit
                </button>
            </a>
        </li>
    )
}

const ProjectList = () => {

    const projects = [
        {name: "Blogger Page", url: 'https://ecmcode.github.io/blogger'},
        {name: "Todo List", url: 'https://ecmcode.github.io/todolist/'},
        {name: "Landing Page", url: 'https://ecmcode.github.io/landing-page-2/'},
        {name: "Clock", url: 'https://ecmcode.github.io/clock'},
    ]
    
    return(
            <ul className="flex flex-col gap-10 justify-center w-full sm:w-2/3">
                {projects.map((project) => 
                    <ProjectListItem
                        key={crypto.randomUUID()}
                        name={project.name}
                        url={project.url}
                    />
                )}
            </ul>
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