import * as React from 'react';


interface Props {
  onSubmit: ({email, password}: {email: string; password: string}) => void;
}

class SignInForm extends React.PureComponent<Props, {}> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {onSubmit} = this.props;

    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={this.emailRef} />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={this.passwordRef}/>
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

export default React.memo(SignInForm);
