import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json'; // This allows jest to understand enzyme wrappers

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
// If jest encounters additional logic, enzyme wrappers, then here's an additional serializer to work with that

// React 16 enzyme adapter
Enzyme.configure({adapter: new Adapter()});