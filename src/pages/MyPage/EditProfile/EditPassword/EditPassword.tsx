import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { NewPassword } from 'types/types';
import { passwordPattern } from 'utils/constant';
import InputBox from 'pages/Authentication/components/InputBox/InputBox';
import './EditPassword.scss';

export default function EditPassword() {
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordStates, setPasswordStates] = useState<NewPassword>({
    password: '',
    passwordCheck: '',
  });
  const [inputTouched, setInputTouched] = useState({
    password: false,
    passwordCheck: false,
  });

  const isPasswordValid = passwordPattern.test(passwordStates.password);
  const isPasswordCheckValid =
    passwordStates.password === passwordStates.passwordCheck;

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordStates({
      ...passwordStates,
      [e.target.name]: e.target.value,
    });
    setInputTouched({
      ...inputTouched,
      [e.target.name]: true,
    });
  };

  return (
    <div className="editPassword flex flex-col items-center justify-center">
      <h1 className="titleText w-full py-20 mb-8 text-4xl font-bold tracking-tight flex justify-center">
        비밀번호 변경
      </h1>

      <section className="w-full flex flex-col items-center gap-7 mt-10">
        <h1 className="font-bold text-2xl tracking-tight">
          🔒새로운 비밀번호를 입력해주세요🔒
        </h1>
        <div className="w-full flex items-center justify-center gap-3 mb-10">
          <InputBox
            name="password"
            type={newPasswordVisible ? 'text' : 'password'}
            title="새로운 비밀번호"
            placeholder="새로운 비밀번호를 입력해주세요."
            onChange={handleInputChange}
            isValid={isPasswordValid}
            message="영문, 숫자, 특수문자를 조합하여 8~16자로 입력해주세요."
            hasTouched={inputTouched.password}
          />
          {newPasswordVisible ? (
            <MdVisibility
              className="toggleButton"
              onClick={toggleNewPasswordVisibility}
            />
          ) : (
            <MdVisibilityOff
              className="toggleButton"
              onClick={toggleNewPasswordVisibility}
            />
          )}
        </div>

        <h1 className="font-bold text-2xl tracking-tight">
          🔒한 번 더 입력해주세요🔒
        </h1>
        <div className="w-full flex items-center justify-center gap-3 mb-10">
          <InputBox
            name="passwordCheck"
            type={confirmPasswordVisible ? 'text' : 'password'}
            title="새로운 비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            onChange={handleInputChange}
            isValid={isPasswordCheckValid}
            message="비밀번호를 다시 확인해주세요."
            hasTouched={inputTouched.passwordCheck}
          />
          {confirmPasswordVisible ? (
            <MdVisibility
              className="toggleButton"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <MdVisibilityOff
              className="toggleButton"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </div>

        <button className="editButton w-2/5 shadow-md px-3 py-2 text-2xl font-bold">
          변경 내용 저장
        </button>
      </section>
    </div>
  );
}
