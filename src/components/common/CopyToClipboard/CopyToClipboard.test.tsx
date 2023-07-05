import React from 'react'
import CopyToClipboard from './CopyToClipboard'
import { render } from '@testing-library/react';

describe('CopyToClipboard', () => {
    test('renders CopyToClipboard component', () => {
        render(<CopyToClipboard text='text'>Copy To Clipboard</CopyToClipboard>)
    })
})
