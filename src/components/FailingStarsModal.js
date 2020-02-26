import React, {useState} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types';
import Modal from "./Modal";
import Button from "./Button";
import {fetchStar} from '../redux/actions';
import './FailingStarsModal.scss';

const Star = ({name}) => <div className="star">{name}</div>;

const FailingStarsModal = (props) => {
    const {onClose, stars: {stars, err, inProgress}, fetchStar} = props;

    console.log(fetchStar);

    const renderedStars = [...stars.values()]
        .reverse()
        .map(star => <Star key={star.id} {...star}/>);

    return (<Modal
        title={'failing stars modal'}
        className={'failing-stars-modal'}
        actionButtons={[<Button key={'add-star'} primary={true} onClick={props.fetchStar} text={'add star'}/>]}
        errMessage={err && 'Failed to fetch a new star! Please try again.'}
        onClose={onClose}>
        The following stars have been returned from the <code>/failing-stars</code> endpoint:
        <div className={'star-title'}><strong>Star:</strong></div>
        <div className="stars-container">
            {!stars.size ? 'No star data.' : renderedStars}
        </div>
    </Modal>);
};

FailingStarsModal.propTypes = {
    onClose: func,
    fetchStar: func,
    stars: object
};

const mapStateToProps = ({stars}) => ({stars});
const mapDispatchToProps = (dispatch) => ({
    fetchStar: () => dispatch(fetchStar())
});

export default connect(mapStateToProps, mapDispatchToProps)(FailingStarsModal);