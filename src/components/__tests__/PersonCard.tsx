import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { PersonCard } from '../PersonCard';
import { render, cleanup, fireEvent, screen } from '../../test-utils';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('PersonCard', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    const onClick = jest.fn();
    render(
      <PersonCard
        name="Luke Skywalker"
        height="172"
        mass="77"
        homeworld="http://swapi.dev/api/planets/1/"
        gender="Female"
        onClick={onClick}
      />
    );
  });

  it('should be able to click on homeworld link', () => {
    const onClick = jest.fn();
    render(
      <MemoryRouter>
        <PersonCard
          name="Luke Skywalker"
          height="172"
          mass="77"
          homeworld="http://swapi.dev/api/planets/1/"
          gender="Female"
          onClick={onClick}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('person-card-homeworld'));
    expect(mockHistoryPush).toHaveBeenCalledWith('planet/1');
  });
});
