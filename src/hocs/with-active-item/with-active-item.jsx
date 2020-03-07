import React from 'react';

const withActiveItem = (Component) =>
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      const isActive = this.state.isActive;

      return (
        <Component {...this.props} isActive={isActive} onClick={this.handleClick} />
      );
    }
  };

export default withActiveItem;
