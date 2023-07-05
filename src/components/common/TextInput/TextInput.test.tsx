import React from 'react'
import TextInput from './TextInput'
import { render } from '@testing-library/react';

describe('TextInput', () => {
    test('renders TextInput component', () => {
        render(<TextInput label="test text " fieldValidation="name" inpData={() => {}} />)
    })
})


