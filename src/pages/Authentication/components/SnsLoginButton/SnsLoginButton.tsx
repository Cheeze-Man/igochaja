import { FC } from 'react';
import './SnsLoginButton.scss';

interface SnsLoginButtonProps {
  logoImage: string;
  bgColor: string;
  textColor: string;
  title: string;
}

const SnsLoginButton: FC<SnsLoginButtonProps> = ({
  logoImage,
  bgColor,
  textColor,
  title,
}) => {
  return (
    <button
      className="snsLoginButton w-2/5 h-14 font-bold rounded-xl mt-3 shadow-md"
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    >
      <img src={logoImage} alt={title} />
      {title}
    </button>
  );
};

export default SnsLoginButton;
