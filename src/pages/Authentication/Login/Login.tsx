import { useState } from 'react';
import { emailPattern, passwordPattern } from 'utils/constant';
import { LoginInfo } from 'types/types';
import handleLogin from 'api/Authentication/Login/LoginAPI';
import InputBox from '../components/InputBox/InputBox';
import AccountActions from '../components/AccountActions/AccountActions';
import SnsLoginButtons from './SnsLoginButtons/SnsLoginButtons';
import './Login.scss';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
  });

  const [inputTouched, setInputTouched] = useState({
    email: false,
    password: false,
  });

  const isEmailValid = emailPattern.test(loginInfo.email);
  const isPasswordValid = passwordPattern.test(loginInfo.password);
  const isFormValid = isEmailValid && isPasswordValid;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
    setInputTouched({
      ...inputTouched,
      [e.target.name]: true,
    });
  };

  return (
    <div className="login h-full flex flex-col items-center justify-center">
      <img
        className="w-64 cursor-pointer"
        src="/images/logo.png"
        alt="Igochaja"
      />

      <InputBox
        name="email"
        type="email"
        title="이메일 주소"
        placeholder="ex) igochaja@email.com"
        onChange={handleInputChange}
        isValid={isEmailValid}
        message="올바른 이메일 형식이 아닙니다."
        hasTouched={inputTouched.email}
      />
      <InputBox
        name="password"
        type="password"
        title="비밀번호"
        placeholder=""
        onChange={handleInputChange}
        isValid={isPasswordValid}
        message="영문, 숫자, 특수문자를 조합하여 8~16자로 입력해주세요."
        hasTouched={inputTouched.password}
      />
      <button
        className="loginButton w-2/5 h-14 font-bold rounded-xl shadow-md"
        disabled={!isFormValid}
        onClick={() => {
          handleLogin(loginInfo, 'user/signin');
        }}
      >
        로그인
      </button>

      <AccountActions />

      <SnsLoginButtons />
    </div>
  );
}
