import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../header/header';

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main">
        <div className="container">
          <img
            src="img/404.png"
            alt="404"
          />
          <h1>Ooooops!<br />
          This page does not exist :(
          </h1>
          <p>
            <Link
              style={{color: '#4481C3'}}
              to="/"
            >
                Take me back home.
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
