import { h, JSX } from 'preact';

interface Props {
  text: string;
  position: 'left' | 'right';
}

export default function Tooltip({ text, position }: Props): JSX.Element {
  return (
    <div
      className={` ${position}-0 absolute z-50 mt-2 max-w-sm whitespace-nowrap rounded-sm bg-black p-2 text-white`}
    >
      {text}
    </div>
  );
}
