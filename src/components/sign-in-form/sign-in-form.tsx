import * as React from 'react';

import withValues from '../../hocs/with-values/with-values';
import {SignIn} from '../../pages/sign-in/sign-in';


interface Props {
  email: string;
  password: string;
  onChange: (e: React.SyntheticEvent) => void;
  onSubmit: ({email, password}) => void;
}

class SignInForm extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const {onSubmit, email, password} = this.props;

    onSubmit({
      email,
      password,
    });
  }

  render() {
    const {onChange} = this.props;

    return (
      <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={onChange}/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={onChange}/>
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

export {SignInForm};
export default React.memo(withValues(SignInForm));
