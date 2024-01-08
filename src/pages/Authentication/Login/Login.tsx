import { useState } from 'react';
import { emailPattern, passwordPattern } from 'utils/constant';
import InputBox from '../components/InputBox/InputBox';
import AccountActions from '../components/AccountActions/AccountActions';
import './Login.scss';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const isEmailValid = emailPattern.test(loginInfo.email);
  const isPasswordValid = passwordPattern.test(loginInfo.password);

  const isFormValid = isEmailValid && isPasswordValid;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.type]: e.target.value,
    });
  };

  return (
    <div className="login w-full h-full flex flex-col items-center justify-center">
      <img className="w-64" src="/images/logo.png" alt="Igochaja" />

      <InputBox
        type="email"
        title="이메일 주소"
        placeholder="ex) igochaja@email.com"
        onChange={handleInputChange}
      />
      <InputBox
        type="password"
        title="비밀번호"
        placeholder=""
        onChange={handleInputChange}
      />
      <button
        className={'loginButton w-2/5 h-14 font-bold rounded-lg'}
        disabled={!isFormValid}
      >
        로그인
      </button>

      <AccountActions />
    </div>
  );
}
