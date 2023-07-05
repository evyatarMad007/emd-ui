import React from 'react'
import PDFSectionListContainer from './PDFSectionListContainer'
import { render } from '@testing-library/react';

describe('PDFSectionListContainer', () => {
    test('renders PDFSectionListContainer component', () => {
        render(<PDFSectionListContainer listTitle="test" sectionList={[]} />)
    })
})
