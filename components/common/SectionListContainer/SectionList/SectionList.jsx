import React from 'react'
import { SectionListStyled } from './SectionList.styled'
import SectionItem from '../SectionItem/SectionItem'

const SectionList = ({list}) => {
  return (
    <SectionListStyled>
        {
          list.map((item, inx) => {
            return (
              <SectionItem section={item} key={inx}/>
            )
          })
        }
    </SectionListStyled>
  )
}

export default SectionList