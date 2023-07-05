import React from 'react'
import ExitBtn from './ExitBtn'
import { render } from '@testing-library/react';

describe('ExitBtn', () => {
    test('renders ExitBtn component', () => {
        render(<ExitBtn onClick={() => {}}/>)
    })
})
