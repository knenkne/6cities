import * as React from 'react';


interface P {
  isActive: boolean;
  onClick: () => void;
}

interface S {
  isActive: boolean;
}

const withActiveItem = (Component) => {
  return class WithActiveItem extends React.PureComponent<P, S> {
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
};

export default withActiveItem;
