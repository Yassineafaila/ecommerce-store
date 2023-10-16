import React from 'react'
import "./NotFound.scss"
import { useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate=useNavigate()
  return (
      <section className="Error__page">
        <h1 className="title__error">404 Not Found</h1>
        <p className="description__error">
          Your visited page not found. You may go home page.
        </p>
        <button className="btn__back" onClick={()=>navigate(-1)}>Back to home page</button>
      </section>
  );
}

export default NotFound