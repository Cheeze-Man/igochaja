import { useState } from 'react';
import InputBox from '../components/InputBox/InputBox';
import './Login.scss';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  console.log(loginInfo);

  return (
    <div className="login w-full h-full flex flex-col items-center justify-center">
      <img className="w-64" src="/images/logo.png" alt="Igochaja" />

      <InputBox
        type="text"
        title="이메일 주소"
        name="email"
        placeholder="ex) igochaja@email.com"
        onChange={handleInputChange}
      />
      <InputBox
        type="password"
        title="비밀번호"
        name="password"
        placeholder=""
        onChange={handleInputChange}
      />
      <button className="loginButton w-1/4 h-14 font-bold rounded-xl">
        로그인
      </button>
    </div>
  );
}
