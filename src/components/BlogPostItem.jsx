const BlogPostItem = ({title, children}) => {

    return(
        <div className="flex flex-col justify-start items-center p-6 rounded ring-1 ring-primary animate-fadein-slow">
            <h4>{title}</h4>
                <p className="my-4">
                    {children}
                </p>
        </div>
    )

}

export default BlogPostItem