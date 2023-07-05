import React from 'react'
import PDFPage from './PDFPage'
import { render } from '@testing-library/react';


describe('PDFPage', () => {
    test('renders PDFPage component', () => {
        render(<PDFPage content={["page1", "page2", "page3"]} pageNumber={1} pageAmount={1} />)
    })
})
