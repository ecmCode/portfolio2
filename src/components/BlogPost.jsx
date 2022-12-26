
const Post = () => {

    return(
        <div className="flex flex-col justify-start items-center p-6 rounded ring-1 ring-primary">
            <h4>Post</h4>
            <p className="my-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam asperiores ad! Dolores, cumque mollitia, reiciendis repellendus voluptates error veniam ab provident excepturi necessitatibus omnis optio qui alias itaque soluta?</p>
        </div>
    )

}

const BlogPost = () => {
    
    return(
        <div className="p-6 sm:p-20 flex justify-center items-center">
            <div className=" grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <Post />
                <Post />     
                <Post /> 
                <Post />
            </div>
        </div>

    )
}

export default BlogPost;
