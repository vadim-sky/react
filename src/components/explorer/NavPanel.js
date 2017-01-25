/**
 * Created by vadimsky on 24/01/17.
 */
import React, {Component} from 'react';

class NavPanel extends Component {
  render() {
    return (
        <div className="btn-group"  aria-label="...">
          <button type="button" className="btn btn-default btn-md">
            <span className="glyphicon glyphicon glyphicon-file" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default btn-md">
            <span className="glyphicon glyphicon glyphicon-folder-open" aria-hidden="true"></span>
          </button>
        </div>
    );
  }
}

export default NavPanel;





