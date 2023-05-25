import * as React from 'react';
import {Conditional} from '../src';
import '@testing-library/jest-dom/extend-expect';
import {render} from "@testing-library/react";


describe('Conditional Component rendering test', () => {
    it('Correct display of content when 3<5', () => {
        const condition = 3 < 5
        const conditional = render(<Conditional value={condition}>Content</Conditional>);
        expect(conditional.getByText('Content')).toBeInTheDocument();
    });

    it('Do not display content when 3>5', () => {
        const condition = 3 > 5
        const conditional = render(<Conditional value={condition}>Content</Conditional>);
        expect(conditional.queryByText('Content')).not.toBeInTheDocument();
    });
});

