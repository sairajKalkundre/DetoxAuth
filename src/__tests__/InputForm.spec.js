import React from 'react';
import {fireEvent, render, cleanup} from '@testing-library/react-native';
import InputForm from 'src/components/InputForm';

describe('Input form validation', () => {
  afterEach(cleanup);
  it('renders the username', () => {
    const {getByPlaceholderText, debug, queryByText} = render(<InputForm />);
    const element = getByPlaceholderText('Email');
    fireEvent(element, 'onChangeText', 'sairajK');
    debug('Check Username input');
    expect(queryByText('Invalid Email')).not.toBeNull();
  });
});
