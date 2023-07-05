import React from 'react'
import PDFTypography from './PDFTypography'
import { render } from '@testing-library/react';

describe('PDFTypography', () => {
    test('renders PDFTypography component', () => {
        render(<PDFTypography value="test" />)
    })
})
