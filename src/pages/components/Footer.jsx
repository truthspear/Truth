import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <ul className='footer__categories'>
            <li>
                <Link to="/posts/categories/:category:Agriculuture">Agriculuture</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Busisness">Busisness</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Education">Education</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Entertainment">Entertainment</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Art">Art</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Investment">Investment</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Uncategorized">Uncategorized</Link>
            </li>
            <li>
                <Link to="/posts/categories/:category:Weather">Weather</Link>
            </li>
        </ul>
        <div className="footer__copyright">
            <small>
                All Rights Reserved &copy; Copyright,ByteBlogs.
            </small>
        </div>
    </footer>
  )
}

export default Footer