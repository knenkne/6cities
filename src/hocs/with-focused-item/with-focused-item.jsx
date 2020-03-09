import React from 'react';

const withFocusedItem = (Component) => (
  class WithFocusedItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        focusedItem: null
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
      e.persist();
      e.preventDefault();

      this.setState({
        focusedItem: parseInt(e.currentTarget.dataset.id, 10)
      });
    }

    handleMouseLeave(e) {
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
  }
);

export default withFocusedItem;
