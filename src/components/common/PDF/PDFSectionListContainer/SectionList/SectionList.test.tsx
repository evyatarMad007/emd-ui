import React from 'react'
import SectionList from './SectionList'
import { render } from '@testing-library/react';

describe('SectionList', () => {
    test('renders SectionList component', () => {
        render(<SectionList list={[]} />)
    })
})
