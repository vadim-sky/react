import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Explorer from "../explorer/Explorer";

const Header = ({loading}) => {
	return (
    <div className="container-fluid">
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={1000} dots={20}/>}
      </nav>
    </div>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
