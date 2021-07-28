import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import Header from '../../header/header';
import {getActiveCity} from '../../../store/ui/selectors';

function LoginPage() {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const activeCity = useSelector(getActiveCity);

  const handleEmailChange = (evt) => {
    const email = evt.target.value;
    const reg = /.+@.+\..+/i;

    !reg.test(email)
      ? evt.target.setCustomValidity('Please provide correct email')
      : evt.target.setCustomValidity('');
  };

  const handlePasswordChange = (evt) => {
    evt.target.value.trim().length === 0
      ? evt.target.setCustomValidity('Password cannot contain only spaces')
      : evt.target.setCustomValidity('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>{activeCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
