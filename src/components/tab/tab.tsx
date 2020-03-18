import * as React from 'react';
import {connect} from 'react-redux';

import {getCity} from '../../store/reducer/cities/selectors';
import {ActionCreator} from '../../store/reducer/cities/actions';


interface P {
  name: string;
  currentCity: string;
  onTabClick: (name: string) => void;
}

const Tab: React.FC<P> = ({name, currentCity, onTabClick}) => {
  const handleClick = () => onTabClick(name);
  return (
    <li className="locations__item" onClick={handleClick}>
      <a className={`locations__item-link tabs__item${currentCity === name ? ` tabs__item--active` : ``}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(name) {
    dispatch(ActionCreator.setCity(name));
  }
});

export {Tab};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

