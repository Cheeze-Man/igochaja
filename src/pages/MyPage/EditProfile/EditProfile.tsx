import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPassword } from 'api/EditUserInfo/EditPassword/checkPassword';
import { IoClose } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';
import useUserStore from 'store/store';
import ProfileImage from './ProfileImage/ProfileImage';
import './EditProfile.scss';
import { nickNamePattern } from 'utils/constant';

export default function EditProfile() {
  const navigate = useNavigate();
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [newNickname, setNewNickname] = useState('');
  const [password, setPassword] = useState('');

  const nickNameIsValid = nickNamePattern.test(newNickname);

  const user = useUserStore((state) => state.user);
  const userEmail = user?.email;

  const handlePasswordCheck = async () => {
    try {
      const response = await checkPassword(userEmail, password);

      if (response.message === 'VALID_PASSWORD') {
        navigate('/edit-password');
      } else {
        console.error('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('비밀번호 변경 요청 실패:', error);
    }
  };

  return (
    <div className="editProfile flex flex-col items-center justify-center">
      <h1 className=" title w-full py-20 mb-8 text-4xl font-bold tracking-tight flex justify-center">
        프로필 편집
      </h1>

      <section className="userInfo flex flex-col items-center gap-20 mt-10">
        <ProfileImage />
        <div className="nameDiv flex gap-2 items-center">
          <p className="font-bold text-2xl tracking-tighter">닉네임</p>
          <MdModeEdit
            className="font-bold text-2xl cursor-pointer"
            onClick={() => {
              setIsNicknameModalOpen(true);
            }}
          />
        </div>
        <button
          className="editButton shadow-md p-2"
          onClick={() => {
            setIsPasswordModalOpen(true);
          }}
        >
          비밀번호 변경
        </button>
      </section>

      {isNicknameModalOpen && (
        <div
          className="overlay"
          onClick={() => setIsNicknameModalOpen(false)}
        />
      )}
      {isNicknameModalOpen && (
        <div className="modal flex flex-col items-center">
          <IoClose
            className="closeButton"
            onClick={() => setIsNicknameModalOpen(false)}
          />
          <h1 className="font-bold text-2xl mb-8">
            새로운 닉네임을 입력해주세요
          </h1>
          <input
            className="modalInput"
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
          />
          {!nickNameIsValid && (
            <p className="text-rose-600 font-bold mt-1.5">
              영어 및 한글 2~8글자. (특수문자 불가능.)
            </p>
          )}
          <button
            className="editButton shadow-md px-10 py-2 text-xl mt-8"
            onClick={() => {
              // TODO : 닉네임 업데이트 로직 넣어야 함.
            }}
          >
            변경하기
          </button>
        </div>
      )}

      {isPasswordModalOpen && (
        <div
          className="overlay"
          onClick={() => setIsPasswordModalOpen(false)}
        />
      )}
      {isPasswordModalOpen && (
        <div className="modal flex flex-col items-center gap-8">
          <IoClose
            className="closeButton"
            onClick={() => setIsPasswordModalOpen(false)}
          />
          <h1 className="font-bold text-2xl">
            🔒기존 비밀번호를 입력해주세요🔒
          </h1>
          <input
            className="modalInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="editButton shadow-md px-10 py-2 text-xl"
            onClick={handlePasswordCheck}
          >
            비밀번호 확인
          </button>
        </div>
      )}
    </div>
  );
}
