import { LoginInfo } from 'types/types';
import axios from 'axios';
import useUserStore from 'store/store';
import { useNavigate } from 'react-router-dom';

const baseURL = process.env.REACT_APP_BASE_URL;

const handleLogin = async (
  loginInfo: LoginInfo,
  url: string,
): Promise<void> => {
  const navigation = useNavigate();
  try {
    const response = await axios.post(`${baseURL}/${url}`, {
      email: loginInfo.email,
      password: loginInfo.password,
    });
    const { data } = response;
    navigation('/main');
    //TODO:통신 시 console.log(data) 필요.

    if (data && data.length > 0) {
      const setUser = useUserStore((state) => state.setUser);
      setUser({
        token: data[0].token,
        email: data[0].email,
        social: data[0].social,
        name: data[0].name,
        image: data[0].image,
        socialId: data[0].socialId,
      });
    }
  } catch (error) {
    //TODO:자체 로그인에서는 message에 따른 예외 처리 필요. (url변수에 따라 자체로그인/sns로그인 분리하면 될 듯.)
    alert(error);
  }
};

export default handleLogin;
