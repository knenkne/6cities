import React from 'react';

const withValues = (Component) => (
  class WithValues extends React.PureComponent {
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
  }
);

export default withValues;
