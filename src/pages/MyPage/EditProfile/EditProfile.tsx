import './EditProfile.scss';

export default function EditProfile() {
  return (
    <div className="editProfile w-full h-full flex flex-col items-center justify-center">
      <h1 className=" title w-full py-20 mb-8 text-4xl font-bold tracking-tight flex justify-center">
        프로필 편집
      </h1>

      <img
        className="rounded-full size-96"
        src="https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"
        alt="profileImage"
      />
      <section className="userInfo"></section>
    </div>
  );
}
