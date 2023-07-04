import { jsx as _jsx } from "react/jsx-runtime";
import { SpinnerOverlay } from './SpinnerScreen.styled';
import Spinner from '../Spinner/Spinner';
const SpinnerScreen = ({ spinnerScreenState }) => {
    if (!spinnerScreenState)
        return null;
    return (_jsx(SpinnerOverlay, { children: _jsx(Spinner, {}) }));
};
export default SpinnerScreen;
