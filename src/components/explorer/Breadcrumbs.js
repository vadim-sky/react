/**
 * Created by vadimsky on 23/01/17.
 */

import React, {Component, PropTypes} from 'react';

class Breadcrumbs extends Component {

  render() {
    const onChange = this.props.onChange;
    return (
      <div>

        <ol className="breadcrumb">
          <li><a href="#"></a></li>
          {this.props.path.map((item, index) => {
            return <li key={index} onClick={onChange}><a href="#">{item.name}</a>
            </li>;
          })}
        </ol>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  path: PropTypes.array.isRequired
  // onChange: PropTypes.func.isRequired
};

export default Breadcrumbs;
//onClick={onChange.bind(this, node, path)}


