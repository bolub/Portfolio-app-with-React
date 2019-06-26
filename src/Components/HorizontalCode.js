import React from 'react';

const HorizontalCode = (props) => {
    return (
        <div className="d-flex flex-row">
            <hr className="w-25 border bg-white mr-2 mt-3 mt-sm-3" />
            <i className="fal fa-code code-font"></i>
            <hr className="w-25 border bg-white ml-2 mt-3 mt-sm-3" />
        </div>

    );
}

export default HorizontalCode;