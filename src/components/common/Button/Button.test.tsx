import React from 'react'
import Button from './Button'
import { render } from '@testing-library/react';

describe('Button', () => {
    test('renders Button component', () => {
        render(<Button variant='outlined' >Click Me</Button>)
    })
})
