import React from 'react';
import { SectionListStyled } from './SectionList.styled';
import SectionItem from '../SectionItem/SectionItem';

interface SectionListProps {
  list: any[]; // specify a more detailed type if possible
}

const SectionList: React.FC<SectionListProps> = ({ list }) => {
  return (
    <SectionListStyled>
      {
        list?.map((item, index) => {
          return (
            <SectionItem section={item} key={index} />
          )
        })
      }
    </SectionListStyled>
  );
}

export default SectionList;
