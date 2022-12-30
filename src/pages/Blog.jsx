import { format } from 'date-fns'

function Blog() {
  const d = format(new Date(), 'eeee yyyy-MM-dd HH:m')
  return (
    <div>
      Blog
    </div>
  )
}

export default Blog