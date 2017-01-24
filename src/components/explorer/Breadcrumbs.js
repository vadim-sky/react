/**
 * Created by vadimsky on 23/01/17.
 */
import React from 'react';

class Breadcrumbs extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li className="active">Data</li>
      </ol>
    );
  }
}

export default Breadcrumbs;
