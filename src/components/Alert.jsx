import React, { useState } from 'react';

const Alert = ({type, children}) => {
    const [hidden, setHidden] = useState(false)
    return (
        <div className={`alert alert-${type} ${hidden ? 'd-none' : null}`}>
            {children}
            <button type="button" onClick={() => setHidden(true)}>×</button>
        </div>
    );
}

export default Alert;
