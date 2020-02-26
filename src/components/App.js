import React from 'react';

import './App.scss';
import Button from "./Button";

const App = () => {
    return (
        <div>
            <Button primary={true} text={'Open Modal'}/>
        </div>
    );
};

export default App;