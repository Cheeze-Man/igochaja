import { useState, ChangeEvent } from 'react';
import { FaCamera } from 'react-icons/fa';
import { uploadProfileImage } from 'api/EditUserInfo/UploadImageResponse/UploadImageResponse';
import useUserStore from 'store/store';
import './ProfileImage.scss';

export default function ProfileImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const user = useUserStore((state) => state.user);
  const accessToken = user?.token;

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      try {
        const jwt = accessToken ? accessToken : 'TODO : 이 부분 지워야 함.';

        const response = await uploadProfileImage(jwt, file);

        if (response.success) {
          window.location.reload();
        } else {
          alert(`프로필 이미지 업로드 실패:${response.message}`);
        }
      } catch (error) {
        alert(`예상치 못한 오류:${error}`);
      }
    } else {
      console.error('Please select a valid image file.');
    }
  };

  return (
    <div className="profileImageDiv">
      <label htmlFor="fileInput" className="cameraIconDiv shadow-xl">
        <FaCamera className="cameraIcon" />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </label>
      <img
        className="rounded-full size-96"
        src={
          selectedFile
            ? URL.createObjectURL(selectedFile)
            : 'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
        }
        alt="profileImage"
      />
    </div>
  );
}
