import { useState } from 'react';
import { SignUpinfo } from 'types/types';
import {
  SIGNUP_INPUT_FIELDS,
  namePattern,
  emailPattern,
  passwordPattern,
} from 'utils/constant';
import InputBox from '../components/InputBox/InputBox';
import handleSignUp from 'api/Authentication/SignUp/SignUpAPI';
import './SignUp.scss';

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState<SignUpinfo>({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const isNameValid = namePattern.test(signUpInfo.name);
  const isEmailValid = emailPattern.test(signUpInfo.email);
  const isPasswordValid = passwordPattern.test(signUpInfo.password);
  const isPasswordCheckValid = signUpInfo.password === signUpInfo.passwordCheck;
  const isFormValid =
    isNameValid && isEmailValid && isPasswordValid && isPasswordCheckValid;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpClick = async () => {
    try {
      await handleSignUp(signUpInfo);
    } catch (error) {
      alert(
        `회원가입 중 에러가 발생했습니다. 고객 센터로 문의해 주세요. 에러 내용:${error}`,
      );
    }
  };

  return (
    <div className="signUp h-full flex flex-col items-center justify-center">
      <img
        className="w-64 cursor-pointer"
        src="/images/logo.png"
        alt="Igochaja"
      />

      <h1 className="font-bold text-3xl tracking-tighter mb-12">회원가입</h1>

      {SIGNUP_INPUT_FIELDS.map((field) => (
        <InputBox
          key={field.name}
          name={field.name}
          type={field.type}
          title={field.title}
          placeholder={field.placeholder}
          onChange={handleInputChange}
        />
      ))}
      <button
        className="signUpButton w-2/5 h-14 font-bold rounded-xl shadow-md mt-10"
        disabled={!isFormValid}
        onClick={handleSignUpClick}
      >
        회원가입
      </button>
    </div>
  );
}
