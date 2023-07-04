import React from 'react'
import Icon from './Icon'
import { render } from '@testing-library/react';

describe('Icon', () => {
    test('renders Icon component', () => {
        render(<Icon iconType="remove" />)
    })
})
