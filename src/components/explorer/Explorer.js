/**
 * Created by vadimsky on 23/01/17.
 */
import React  from 'react';
import Breadcrumbs from './Breadcrumbs'

class Explorer extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-7 ">
              <Breadcrumbs/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5 ">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..."/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-body">
          Hello World!!!
        </div>

      </div>
    );
  }
}

export default Explorer;
