import React from 'react';
import { SpinnerOverlay } from './SpinnerScreen.styled';
import Spinner from '../Spinner/Spinner';

interface SpinnerScreenProps {
  spinnerScreenState: boolean;
}

const SpinnerScreen: React.FC<SpinnerScreenProps> = ({ spinnerScreenState }) => {
  if (!spinnerScreenState) return null;

  return (
    <SpinnerOverlay>
      <Spinner />
    </SpinnerOverlay>
  );
};

export default SpinnerScreen;
