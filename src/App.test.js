import { fireEvent, render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('Test booking flow', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );

  const reserveBtn = screen.getByText("Reserve a table");
  expect(reserveBtn).toBeInTheDocument();
  fireEvent.click(reserveBtn);

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Reservation options");

  const numOfPeople = screen.getByPlaceholderText("Number of people");
  expect(numOfPeople).toBeInvalid();
  fireEvent.change(numOfPeople, {target: {value: "5"}});
  expect(numOfPeople).not.toBeInvalid();

  const date = screen.getByTestId("selectedDate");
  const getDate = new Date();
  const today = getDate.toISOString().split('T')[0];
  expect(date).toHaveValue(today);

  const time = screen.getByTestId("selectedTime");
  const initialTimes = ['12:00', '13:00', '14:00', '15:00'];
  expect(screen.getAllByRole('option').length).toBe(initialTimes.length)
  expect(time).toHaveValue("12:00");

  fireEvent.change(date, {target: {value: "2023-04-27"}});
  expect(date).toHaveValue("2023-04-27");// be careful date should be in ISO8601 format!

  expect(time).not.toHaveValue("12:00");
  let options = screen.getAllByRole('option');
  expect(time).toHaveValue(options[0].value);
  fireEvent.change(time, {target: {value: options[0].value}});
  expect(options[0].selected).toBeTruthy();

  const bookBtn = screen.getByText("Book");
  expect(bookBtn).toBeInTheDocument();
  fireEvent.click(bookBtn);

  const newHeading = screen.getByRole("heading");
  expect(newHeading).not.toHaveTextContent("Reservation options");

  const selectedNumofPeople = screen.getByText(numOfPeople.value + " people");
  expect(selectedNumofPeople).toBeInTheDocument();

  const selectedTime = screen.getByText(time.value);
  expect(selectedTime).toBeInTheDocument();

});
