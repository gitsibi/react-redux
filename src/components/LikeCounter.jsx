/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from './Action';

const LikeCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleIncrement = () => {
        dispatch(incrementLike());
    };

    const handleDecrement = () => {
        dispatch(decrementLike());
    };

    return (
        <>
            <h1 className="heading-text">{count}</h1>
            <button className="button-like" onClick={handleIncrement} >Like</button>
            <button className="button-unlike" onClick={handleDecrement} >Unlike</button>
        </>
    );
};

export default LikeCounter;
