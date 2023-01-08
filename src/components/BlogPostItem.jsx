import fallback from "../assets/fallback_wp.jpg"
const BlogPostItem = ({title, background, author, date, children}) => {

    return(
        <div className="flex flex-col justify-between items-center rounded ring-1 ring-primary animate-fadein-slow">
            <img src={background || fallback} alt="bg" className="object-cover aspect-video object-center"/>
            <div className="p-6 h-full w-full flex flex-col items-center justify-between">
                <h4 className="text-center w-4/5 my-4">{title}</h4>
                <div className="flex justify-between w-full p-2">
                    <p className="italic">by: {author}</p>
                    <p className="font-medium">{date}</p>
                </div>
                <p className="text-left w-full my-4 text-ellipsis line-clamp-4 font-medium min-h-[6rem]">
                    {children}
                </p>
                <a href="" className="text-right w-full underline underline-offset-4 text-lg">
                    Keep Reading...
                </a>
            </div>
        </div>
    )

}

export default BlogPostItem