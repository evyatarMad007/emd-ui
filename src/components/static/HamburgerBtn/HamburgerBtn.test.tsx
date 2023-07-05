import React from 'react'
import HamburgerBtn from './HamburgerBtn'
import { render } from '@testing-library/react';

describe('HamburgerBtn', () => {
    test('renders HamburgerBtn component', () => {
        render(<HamburgerBtn  onClick={() => {}}/>) 
    })
})
