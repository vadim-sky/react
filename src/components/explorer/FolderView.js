import React, {PropTypes} from 'react';

const FolderView = ({name, folder, onClick}) => {

	return (
        <div className="folder" onDoubleClick={onClick}>
          <span className="glyphicon glyphicon glyphicon-folder-open">
          </span>
          <div>{name}</div>
        </div>
        );
};

FolderView.propTypes = {
    name: PropTypes.string.isRequired,
    folder: PropTypes.object.isRequired,
};

export default FolderView;
