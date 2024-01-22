import axios, { AxiosResponse } from 'axios';

interface CheckPasswordResponse {
  message: string;
}

const baseURL = process.env.REACT_APP_BASE_URL;

export const checkPassword = async (
  email: string | undefined,
  password: string,
): Promise<CheckPasswordResponse> => {
  try {
    const response: AxiosResponse<CheckPasswordResponse> = await axios.post(
      `${baseURL}/user/signin`,
      { email, password },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
