import * as React from 'react';
import {Subtract} from "utility-types";


interface State {
  rating: number;
  comment: string;
}
interface Props {
  rating: number;
  comment: string;
  onCommentChange: () => void;
  onRatingCHange: () => void;
  onReset: () => void;
}

const withValues = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, Props>;
  return class WithValues extends React.PureComponent<T, State> {

    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    handleCommentChange(e) {
      this.setState({comment: e.target.value});
    }

    handleRatingChange(e) {
      this.setState({rating: parseInt(e.target.value, 10)});
    }

    handleReset() {
      this.setState({rating: null, comment: ``});
    }

    render() {
      return (
        <Component {...this.props} rating={this.state.rating} comment={this.state.comment} onCommentChange={this.handleCommentChange} onRatingChange={this.handleRatingChange} onReset={this.handleReset}/>
      );
    }
  };
};

export default withValues;
