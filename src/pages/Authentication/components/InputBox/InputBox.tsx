import './InputBox.scss';
import { FC } from 'react';

interface InputBoxProps {
  type: string;
  title: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: FC<InputBoxProps> = ({
  type,
  title,
  placeholder,
  onChange,
}) => {
  return (
    <div className="inputBox flex flex-col w-2/5 mb-7">
      <p className="title text-sm font-bold mb-1">{title}</p>
      <input
        className="h-10"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
