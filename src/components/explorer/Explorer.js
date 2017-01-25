/**
 * Created by vadimsky on 23/01/17.
 */
import React, {PropTypes}  from 'react';
import FileView from './FileView';
import FolderView from './FolderView';
import Breadcrumbs from './Breadcrumbs'
import NavPanel from './NavPanel';
import {Utils} from "../../utils/index";


class Explorer extends React.Component {
	constructor(props, context) {
		super(props, context);
    this.state = {
      folder: props.folder,
      path: [...props.path||[], props.folder],
      parent : this.props.parent,
      sortOrder: 0,
      search: ""
    }
    this.searhText = "";
    this.findIt = this.findIt.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
	}

  itemView (item) {
    switch (item.type) {
      case "folder":  return this.itemFolder(item);
      case "file":    return this.itemFile (item);
    }
  }

  itemFile (item) {
    return (<FileView name={item.name}/>);
  }

  upFolder(item, e) {
    this.state.folder = Object.assign({},this.state.path.pop());
    this.setState(Object.assign({}, {
      folder: [...this.state.path].pop(),
      path: this.state.path,
      sortOrder: 0
    }));
  }

  openFolder(item, e) {
    this.state.path.push(item);
    // this.state.parent = Object.assign({},this.state.folder);
    this.state.folder = Object.assign({},item);

    this.setState(Object.assign({}, {
      folder: this.state.folder,
      path: [...this.state.path],
      sortOrder: 0
    }));
  }

  onSearchChange(e) {
    this.searhText = e.target.value;
  }

  findIt(e) {
    let result = Utils.search(this.searhText, this.state.path[0]);
    if (result.length > 0) {
      console.log(result);
      this.setState(Object.assign({}, {
        folder: [...result[0].path].pop(),
        path: [...result[0].path],
        sortOrder: 0
      }));
    }
  }

  onBreadClick(index, path, event) {
    console.log(index);
  }

  viewUpFolder (path) {
    if (path.length <=1) {
      return;
    }
    return <li className="list-group-item">
            <div onClick={this.upFolder.bind(this, path[path.length-1])}>...</div>
           </li>
  }

  itemFolder (item) {
    return (
      <FolderView name={item.name} folder={this.state.folder} onClick={this.openFolder.bind(this, item)}/>
    );
  }

  render() {
		// const {folder, parent } = this.props;
    const folder = this.state.folder;
    const folderItems =  Utils.sort(this.state.folder.children);
    const path = this.state.path;
    let search = this.state.search;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-7 ">
                <Breadcrumbs path={path} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5 ">
              <div className="input-group">
                <input type="text" className="form-control" value={this.props.searhText} onChange={this.onSearchChange} placeholder="Search..."/>
                <span className="input-group-btn">
    <button className="btn btn-default" type="button" onClick={this.findIt}>Go!</button>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <NavPanel />
          </div>
        </div>

        <div className="panel-body">
         <ul className="list-group">
              {this.viewUpFolder(path)}
              {folderItems.map((item, index) =>
               <li className="list-group-item" key={index}>
                  {this.itemView(item)}
               </li>
              )}
          </ul>
        </div>
        <div className="panel-footer">

          <p className="code">{JSON.stringify(folder)}
          </p>
        </div>
      </div>
    );
  }
}

Explorer.propTypes = {
  folder: PropTypes.object.isRequired
};

export default Explorer;
