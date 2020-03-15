import * as React from 'react';
import {Subtract} from 'utility-types';


interface S {
  isActive: boolean;
}

interface InjectingProps {
  isActive: boolean;
  onClick: () => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  return class WithActiveItem extends React.PureComponent<T, S> {
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
