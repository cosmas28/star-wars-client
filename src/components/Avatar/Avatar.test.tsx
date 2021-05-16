import React from 'react';

import {render, cleanup} from "../../test-utils";

import {Avatar} from './';

describe('Avatar', () => {
	afterEach(cleanup);

	it('renders without error', () => {
		render(<Avatar initialLetter="B" sizeInPx="40"/>)
	})
})
