import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const TextArea = (props) => {
    let classname = "form-control";
    let hideAlert = true;

    if (props.modified && !props.valid) {
        classname = "form-control is-invalid";
        hideAlert = false;
    } else if (props.modified && props.valid) {
        classname = "form-control is-valid";
        hideAlert = true;
    }

    return (
        <div>
            <div id="textareaalert-div" class="alert alert-danger" role="alert" hidden={hideAlert}>
                Please enter at least 10 characters to submit your feedback!
            </div>

            <div className="form-group">
                <textarea
                    id="textarea-id"
                    className={classname}
                    {...props}
                />
            </div>
        </div>
    )

}

export default TextArea