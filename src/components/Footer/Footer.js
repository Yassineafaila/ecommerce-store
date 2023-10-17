import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss"
function Footer() {
  return (
    <footer>
      <div>
        <p>by Me :</p>
        <Link to="https://github.com/Yassineafaila" target="_blank">
          Yassine Afaila
        </Link>
      </div>
    </footer>
  );
}

export default Footer