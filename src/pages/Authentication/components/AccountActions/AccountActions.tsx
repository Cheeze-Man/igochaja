import { useNavigate } from 'react-router-dom';
import './AccountActions.scss';

export default function AccountActions() {
  const navigate = useNavigate();

  return (
    <ul className="accountActions my-6 w-2/5 flex items-center">
      <li
        className="text-center"
        onClick={() => {
          navigate('/signup');
        }}
      >
        이메일 가입
      </li>
      <li className="text-center">이메일 찾기</li>
      <li className="text-center">비밀번호 찾기</li>
    </ul>
  );
}
