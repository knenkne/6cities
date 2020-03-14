import * as React from 'react';
import {connect} from 'react-redux';

import {getCity} from '../store/reducers/cities/selectors';
import {setAuth} from '../store/actions/actions';

import Header from '../components/header/header';
import Form from '../components/sign-in-form/sign-in-form';

interface Props {
  city: string;
  handleLogin: () => void;
}

const SignIn: React.FC<Props> = ({city, handleLogin}: Props) => {
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
};


const mapStateToProps = (state) => ({
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(authData) {
    dispatch(setAuth(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SignIn));
