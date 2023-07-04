import { jsx as _jsx } from "react/jsx-runtime";
import { SectionListStyled } from './SectionList.styled';
import SectionItem from '../SectionItem/SectionItem';
const SectionList = ({ list }) => {
    return (_jsx(SectionListStyled, { children: list.map((item, index) => {
            return (_jsx(SectionItem, { section: item }, index));
        }) }));
};
export default SectionList;
