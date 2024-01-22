import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPassword } from 'api/EditUserInfo/EditPassword/checkPassword';
import { IoClose } from 'react-icons/io5';
import useUserStore from 'store/store';
import './EditProfile.scss';

export default function EditProfile() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');

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
        <img
          className="rounded-full size-96"
          src="https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"
          alt="profileImage"
        />
        <div className="nameDiv flex gap-2">
          <p className="font-bold text-2xl tracking-tighter">닉네임</p>
          <button className="editButton shadow-md px-3">변경</button>
        </div>
        <button
          className="editButton shadow-md p-2"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          비밀번호 변경
        </button>
      </section>

      {isModalOpen && (
        <div className="overlay" onClick={() => setIsModalOpen(false)} />
      )}
      {isModalOpen && (
        <div className="modal flex flex-col items-center gap-8">
          <IoClose
            className="closeButton"
            onClick={() => setIsModalOpen(false)}
          />
          <h1 className="font-bold text-2xl">
            🔒기존 비밀번호를 입력해주세요🔒
          </h1>
          <input
            className="passwordInput"
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
