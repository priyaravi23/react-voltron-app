import React, {useState} from 'react';

import './App.scss';
import Button from "./Button";
import Modal from "./Modal";

const App = () => {
    const [isModalOpen, setModalVisibility] = useState(false);
    const toggleModal = () => {
        setModalVisibility(!isModalOpen);
    };
    return (
        <div>
            <Button onClick={toggleModal} primary={true} text={'Open Modal'}/>
            {isModalOpen && <Modal onClose={toggleModal}/>}
        </div>
    );
};

export default App;