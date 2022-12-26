
const Title = (props) => {
    
    return(
        <div className="py-10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl">{props.children}</h1>
            <hr className="h-2 w-1/3 bg-title border-0 drop-shadow-lg"/>
        </div>
    )
}

export default Title