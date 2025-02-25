import React from 'react'
import PostAuthor from './components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from './images/blog22.jpg'
const PostDetail = () => {
  return (
    <section className="post__detail">
      <div className="post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={'/post/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/post/werwer/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is Post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quidem quia quis recusandae corrupti accusamus molestiae blanditiis aspernatur. Voluptatum cupiditate voluptatibus ipsum sequi! Facere a ratione temporibus fugiat quaerat molestias repellendus iste eum maiores quam, dolor nobis officiis obcaecati commodi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente perferendis, natus dolore ipsa fugit velit doloremque dolorem exercitationem hic deserunt molestias nostrum explicabo quas quos debitis necessitatibus cupiditate esse suscipit neque laboriosam. Autem dolorem provident voluptatem veniam sequi cupiditate adipisci aut aliquid quo! Rem, labore. Eum dolor molestias optio eveniet assumenda rerum iure tempore?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae laudantium nihil repellendus fugit aut numquam sed tenetur necessitatibus eos minima sapiente sit provident sequi nostrum inventore voluptatum, quo, asperiores blanditiis officiis quisquam temporibus, molestiae tempora quasi? Odit voluptate aperiam eaque assumenda sunt, quibusdam recusandae minus deserunt ab iusto nulla, aut officia. In recusandae minus, veniam at, et rerum natus consequuntur animi magnam laboriosam reiciendis! Expedita magni perspiciatis ipsum minima cum debitis. Sit, unde! Aliquam accusamus iste earum inventore, numquam eum officiis magni error rem perferendis cum sapiente nihil exercitationem soluta facilis obcaecati? Ab sapiente sit beatae! Perferendis quaerat molestiae velit et illum temporibus voluptates quasi in, sint inventore ad voluptas provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt consequatur, tenetur mollitia quis voluptatem voluptate tempora et vero alias!</p>
      </div>
    </section>
  )
}

export default PostDetail