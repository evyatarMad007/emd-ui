import React from 'react'
import PDFDocument from './PDFDocument'
import { render } from '@testing-library/react';
jest.mock('jspdf', () => () => ({}));


describe('PDFDocument', () => {
    test('renders PDFDocument component', () => {
        render(<PDFDocument content={["page1", "page2", "page3"]} itemsPerPage={1} />)
    })
})
