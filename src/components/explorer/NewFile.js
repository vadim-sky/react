import React, {PropTypes} from 'react';

const NewFile = ({name, type, onSave}) => {

    handleKeyPress = (target) => {
        if(target.charCode==13){
            this.props.onSave(target.value, this.props.type);
        }
    }


	return (
		<div className="form-group">
            <input type="email" class="form-control" value="" onKeyPress={this.handleKeyPress} />

		</div>
	);
};

NewFile.propTypes = {
    value: PropTypes.string,
	oSave: PropTypes.func.isRequired,
};

export default NewFile;