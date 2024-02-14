import axios from 'axios';

export const changePassword = async (token: string, password: string) => {
  try {
    const response = await axios.post(
      '/mypage/setting/password',
      { password },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
