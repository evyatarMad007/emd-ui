import React from 'react'
import SectionItem from './SectionItem'
import { render } from '@testing-library/react';

describe('SectionItem', () => {
    test('renders SectionItem component', () => {
        render(<SectionItem section={{name: "test", number: 1, content: "test"}} />)
    })
})
