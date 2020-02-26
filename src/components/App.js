import React, {useState} from 'react';

import './App.scss';
import Button from "./Button";
import Modal from "./Modal";
import FailingStarsModal from "./FailingStarsModal";

const App = () => {
    const [isModalOpen, setModalVisibility] = useState(true);
    const toggleModal = () => {
        setModalVisibility(!isModalOpen);
    };
    return (
        <div>
            <Button onClick={toggleModal} primary={true} text={'Open Modal'}/>
            {isModalOpen && <FailingStarsModal onClose={toggleModal}/>}
        </div>
    );
};

export default App;