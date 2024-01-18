import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  message: string;
}

const signUpUser = async (userData: SignUpData): Promise<SignUpResponse> => {
  try {
    const response = await axios.post(`${baseURL}/basic/signup`, userData);
    return response.data;
  } catch (error) {
    alert(`회원가입 중 오류 발생. 내용:${error}`);
    throw error;
  }
};

const handleSignUp = async (signUpInfo: SignUpData) => {
  try {
    const result = await signUpUser(signUpInfo);

    if (result.message === 'SIGN UP COMPLETED') {
      alert('회원가입 성공');
    } else if (result.message === 'SIGN UP REQUIRED') {
      alert('회원가입 실패');
    }
  } catch (error) {
    alert(`회원가입 중 오류 발생. 내용:${error}`);
    throw error;
  }
};

export default handleSignUp;
