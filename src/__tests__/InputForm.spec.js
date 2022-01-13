import React from 'react';
import {fireEvent, render, cleanup} from '@testing-library/react-native';
import InputForm from 'src/components/InputForm';

describe('Input form validation', () => {
  it('validates the email if incorrect email is provided', () => {
    const {getByPlaceholderText, debug, getByText} = render(<InputForm />);
    const email = getByPlaceholderText('Email');
    fireEvent(email, 'onChangeText', 'sairajKalkundre@gmail');
    expect(getByText(/Invalid/i)).not.toBeNull();
  });

  it('validates the password if the password length is less than 8', () => {
    const {getByPlaceholderText, debug, queryByText} = render(<InputForm />);
    const password = getByPlaceholderText('Password');
    fireEvent(password, 'onChangeText', '12345');
    expect(
      queryByText('Password length should be more than 8 characters.'),
    ).not.toBeNull();
  });
});
