import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

interface UploadImageResponse {
  success: boolean;
  message: string;
  imageUrl: string;
}

export const uploadProfileImage = async (
  jwt: string,
  imageFile: File,
): Promise<UploadImageResponse> => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await axios.patch(
      `${baseURL}/mypage/setting/image`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: jwt,
        },
      },
    );

    return response.data as UploadImageResponse;
  } catch (error) {
    alert(`프로필 이미지 변경 실패: ${error}`);
    throw error;
  }
};
