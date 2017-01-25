import React, {PropTypes} from 'react';

const FileView = ({name}) => {
	return (
        <div className="">
          <span className="glyphicon glyphicon-file">
          </span>
          <div>{name}</div>
        </div>

	);
};

export default FileView;
