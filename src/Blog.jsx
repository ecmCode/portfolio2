import './Blog.css'
import { BlogCard } from './components/BlogCard';
import { format } from 'date-fns'

function Blog() {
  const d = format(new Date(), 'eeee yyyy-MM-dd HH:m')
  return (
    <div className="Blog">
      <h1>Blog</h1>
      <div className="b-container">
        <BlogCard title="Blog" date={d}>Hello World</BlogCard>
        <BlogCard title="Blog" date={d}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dignissimos at architecto quo enim repellat, iste aliquam sint modi, eos eaque cupiditate omnis commodi quibusdam laudantium! Blanditiis obcaecati veniam debitis!</BlogCard>
        <BlogCard title="Blog" date={d}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates soluta sint laborum quasi cum maiores perspiciatis dolor possimus voluptate corporis harum dignissimos, velit totam commodi placeat neque impedit odit.</BlogCard>
        <BlogCard title="Blog" date={d}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, assumenda nihil amet voluptatem numquam ratione magnam debitis nam aperiam perferendis, veritatis dolorem quidem. Rerum perferendis vitae reiciendis tenetur consequatur possimus!</BlogCard>
        <BlogCard title="Blog" date={d}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestias obcaecati tempora laborum, earum harum quisquam corporis quia eius excepturi sit ullam rerum atque tenetur aliquam nesciunt! Fugiat, dolor repudiandae.</BlogCard>
        <BlogCard title="Blog" date={d}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus fuga, molestias nemo excepturi sed doloremque eos eius? Similique, eos dolorem! Sed esse velit quos doloribus beatae in cupiditate modi?</BlogCard>
      </div>
    </div>
  )
}

export default Blog