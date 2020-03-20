import * as React from 'react';
import {Subtract} from "utility-types";


interface State {
 [key: string]: string;
}

interface Props {
  rating: number;
  comment: string;
  onCommentChange: () => void;
  onRatingChange: () => void;
  onReset: () => void;
}

const initialState = {};

const withValues = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, Props>;
  return class WithValues extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = initialState;

      this.handleChange = this.handleChange.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
      const cleanState = {};
      Object.keys(this.state).forEach((key) => {
        cleanState[key] = ``;
      });
      this.setState(cleanState);
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    render() {
      return (
        <Component {...this.props} {...this.state} onChange={this.handleChange} onReset={this.handleReset}/>
      );
    }
  };
};

export default withValues;
