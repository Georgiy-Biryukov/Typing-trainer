import { useSelector } from 'react-redux';

export const Text = () => {
  const text = useSelector((state) => state.typing.textValue);

  let typingText = [];

  for (let word of text) {
    typingText.push(word);
  }

  return typingText;
};
