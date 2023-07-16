import React from 'react'
import Button from './Button'
import { render,fireEvent } from '@testing-library/react';

describe('Button', () => {
    test('renders Button component', () => {
        render(<Button variant='outlined' >Click Me</Button>)
    })

    // write test for clicking on the component:
    test("click on the button", () => {
        const handleClick = jest.fn();

        const { getByText } = render(
            <Button onClick={handleClick} variant='outlined'>
                Click Me
            </Button>
        );

        fireEvent.click(getByText('Click Me'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})
