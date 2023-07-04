import { jsx as _jsx } from "react/jsx-runtime";
import { SpinnerContainerSmall, SpinnerContainerBig } from "./Spinner.styled";
const Spinner = ({ size = "big" }) => {
    if (size === "small")
        return _jsx(SpinnerContainerSmall, {});
    if (size === "big")
        return _jsx(SpinnerContainerBig, {});
    return null; // Add a default return statement if needed
};
export default Spinner;
