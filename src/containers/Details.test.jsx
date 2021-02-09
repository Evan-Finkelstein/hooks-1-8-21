import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Details from './Details';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Details container', () => {
    it('displays a loading screen then a single date', async () => {

        render(<Router><Details path={'/date/2021-01-01'} /></Router>);

        screen.getByText('Loading...');

        const ul = await screen.findByTestId('date');

        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement();
        });
    });
});
