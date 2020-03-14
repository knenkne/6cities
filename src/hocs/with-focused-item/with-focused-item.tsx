import * as React from 'react';
import {Subtract} from 'utility-types';


interface S {
  focusedItem: null | number;
}

interface InjectingProps {
  focusedItem: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const withFocusedItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  return class WithFocusedItem extends React.PureComponent<T, S> {
    constructor(props: P) {
      super(props);

      this.state = {
        focusedItem: null
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
      e.persist();
      e.preventDefault();

      this.setState({
        focusedItem: parseInt(e.currentTarget.dataset.id, 10)
      });
    }

    handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
      e.persist();
      e.preventDefault();

      this.setState({
        focusedItem: null
      });
    }

    render() {
      return (
        <Component {...this.props} focusedItem={this.state.focusedItem} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
      );
    }
  };
};

export default withFocusedItem;
