import './InputBox.scss';
import { FC } from 'react';

interface InputBoxProps {
  name: string;
  type: string;
  title: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  message: string;
  hasTouched: boolean;
}

const InputBox: FC<InputBoxProps> = ({
  name,
  type,
  title,
  placeholder,
  onChange,
  isValid,
  message,
  hasTouched,
}) => {
  return (
    <div className="inputBox flex flex-col w-2/5 mb-7">
      <p className="inputTitle text-sm font-bold mb-1">{title}</p>
      <input
        className="h-10"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={() => hasTouched}
      />
      {hasTouched && !isValid && (
        <p className="message text-xs font-bold text-red-500">{message}</p>
      )}
    </div>
  );
};

export default InputBox;
