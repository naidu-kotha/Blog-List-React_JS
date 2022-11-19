// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  console.log(title, description, publishedDate)
  return (
    <>
      <li className="list-item">
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
    </>
  )
}

export default BlogItem
