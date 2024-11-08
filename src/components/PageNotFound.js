import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='App pageNotFoundDiv'>
      <h1>Page Not Found</h1>

      <p className=''>
           Click here to go to the &nbsp;&nbsp;
            <Link to={"/"}>Signin / login</Link> &nbsp;&nbsp;  Page.
      </p>
    </div>
  )
}

export default PageNotFound
