import React from "react";
import { render, fireEvent, findAllByText } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test('contact form adds new users to user list', () => {
    const { getByLabelText, getByTestId, findAllByText } = render(<ContactForm />)

    const firstNameInput = getByLabelText(/First Name*/i);
    const middleNameInput = getByLabelText(/middle Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);
    // const termsInput = getbyLabelText(/terms/i)

    fireEvent.change(firstNameInput, {target: {value: 'Edd'}});
    fireEvent.change(middleNameInput, {target: {value: 'forky'}});
    fireEvent.change(lastNameInput, {target: {value: 'burke'}});
    fireEvent.change(emailInput, {target: {value: 'bluebill1049@hotmail.com'}});
    fireEvent.change(messageInput, {target: {value: 'Edd is a beastly individual'}});
    // fireEvent.click(termsInput, {target: {value: 'true'});

    const submitButton = getByTestId(/submit-button/i);

    act(() => {
        fireEvent.click(submitButton);
    })

    findAllByText(/edd/i);
})