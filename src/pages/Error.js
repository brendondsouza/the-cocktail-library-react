import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='errer-page section'>
      <div className="error-container">
        <h1>It's a dead end! </h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  )
}

export default Error
