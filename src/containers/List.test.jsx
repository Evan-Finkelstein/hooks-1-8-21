import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import List from './List';

describe('AllQuotes container', () => {
    it('displays a loading screen then a list of dates', async () => {
        render(<List />);

        screen.getByText('Loading...');

        const ul = await screen.findByTestId('dates');

        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement();
        });
    });
});
