import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {getAuthorizationStatus} from '../store/reducers/user/selectors.js';
import {getCity} from '../store/reducers/cities/selectors.js';
import {setAuth} from '../store/actions/actions.js';

import Header from '../components/header/header.jsx';
import Form from '../components/sign-in-form/sign-in-form.jsx';


function SignIn({city, handleLogin, isAuthorized}) {
  if (isAuthorized) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <Form onSubmit={handleLogin} />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  isAuthorized: PropTypes.bool,
  city: PropTypes.string,
  handleLogin: PropTypes.func
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(authData) {
    dispatch(setAuth(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
