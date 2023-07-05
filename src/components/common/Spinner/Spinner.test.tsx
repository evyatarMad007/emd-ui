import React from 'react'
import Spinner from './Spinner'
import { render } from '@testing-library/react';

describe('Spinner', () => {
    test('renders Spinner component', () => {
        render(<Spinner size='big'/>)
    })
})
