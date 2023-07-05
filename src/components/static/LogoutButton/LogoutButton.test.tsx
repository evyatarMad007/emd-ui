import React from 'react'
import LogoutButton from './LogoutButton'
import { render } from '@testing-library/react';

describe('LogoutButton', () => {
    test('renders LogoutButton component', () => {
        render(<LogoutButton/>)
    })
})
