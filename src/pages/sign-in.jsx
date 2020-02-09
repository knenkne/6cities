import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/header.jsx';
import Form from '../components/sign-in-form/sign-in-form.jsx';


function SignIn(props) {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <Form />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{props.city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  city: PropTypes.string
};

export default SignIn;