import React from 'react'
import SpinnerScreen from './SpinnerScreen'
import { render } from '@testing-library/react';

describe('SpinnerScreen', () => {
    test('renders SpinnerScreen component', () => {
        render(<SpinnerScreen  spinnerScreenState={true} />)
    })
})
