import React, {useState} from 'react';
import {func} from 'prop-types';
import Modal from "./Modal";
import Button from "./Button";

import './FailingStarsModal.scss';

const fetchStar = async () => {
    const res = await fetch('https://starscape.voltron-eng.com/failing-stars');
    const data = await res.json();
    return data;
};

const Star = ({name}) => <div className="star">{name}</div>;

const FailingStarsModal = (props) => {
    const {onClose} = props;

    const [stars, setStars] = useState(new Map());
    const [err, setErr] = useState(null);

    const onAddStar = async () => {
        try {
            const star = await fetchStar();
            console.log(star);
            setErr(null);
            if (!stars.has(star.id)) {
                stars.set(star.id, star);
                setStars(new Map([...stars].slice(-3)));
            } else {
                alert('Star exists. Please try again.');
            }
        } catch (ex) {
            alert('Error accessing the star data. Please try again.');
            setErr(ex);
        }
    };

    console.log(stars);

    const renderedStars = [...stars.values()].reverse().map(star => <Star key={star.id} {...star}/>);

    return (<Modal
        title={'failing stars modal'}
        className={'failing-stars-modal'}
        actionButtons={[<Button key={'add-star'} onClick={onAddStar} text={'add star'}/>]}
        onClose={onClose}>
        The following stars have been returned from the <code>/failing-stars</code> endpoint:
        <div><strong>Star:</strong></div>
        <div>
            {!stars.size ? 'No star data.' : renderedStars}
        </div>
    </Modal>);
};

FailingStarsModal.propTypes = {
    onClose: func
};

export default FailingStarsModal;