import React from 'react';
import { SpinnerOverlay } from './SpinnerScreen.styled';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';

const SpinnerScreen = () => {
    const spinnerScreen = useSelector(state => state.UIStore.isSpinnerScreenOpen);

    if(!spinnerScreen) return null;

    return (
        <SpinnerOverlay>
            <Spinner/>
        </SpinnerOverlay>
    );
};

export default SpinnerScreen;
