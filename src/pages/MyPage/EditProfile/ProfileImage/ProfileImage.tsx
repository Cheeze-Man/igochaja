import { useState, ChangeEvent } from 'react';
import { uploadProfileImage } from 'api/EditUserInfo/UploadImageResponse/UploadImageResponse';
import { FaCamera } from 'react-icons/fa';
import useUserStore from 'store/store';
import './ProfileImage.scss';

export default function ProfileImage() {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      try {
        const user = useUserStore((state) => state.user);
        const accessToken = user?.token ?? '';

        // 이미지 업로드
        const response = await uploadProfileImage(accessToken, file);

        if (response.success) {
          console.log('Profile image uploaded successfully');
          const imageUrl = response.imageUrl;
          setProfileImageUrl(imageUrl);
        } else {
          console.error('Profile image upload failed:', response.message);
        }
      } catch (error) {
        console.error('Error handling profile image:', error);
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
          profileImageUrl ||
          'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
        }
        alt="profileImage"
      />
    </div>
  );
}
