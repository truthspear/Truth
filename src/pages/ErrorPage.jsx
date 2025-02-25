import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to="/" className='btn primary'>Go Back Home</Link>
        <h2>Error404</h2>
        <h3>Page Not Found.</h3>
      </div>

    </section>
  )
}

export default ErrorPage