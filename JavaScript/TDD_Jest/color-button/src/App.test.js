import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />);

  // button의 역할을 가지는 요소를 찾을 건데, 요소 안의 컨텐츠로 'change to blue!'라는 요소를 가지고 있어야 해
  const button = screen.getByRole('button', {name: 'change to blue!'})

  // button 요소의 배경 컬러가 red이길 기대함
  expect(button).toHaveStyle({backgroundColor: 'red'})

  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button.textContent).toBe('change to red!')
});
