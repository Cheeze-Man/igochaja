import SnsLoginButton from 'pages/Authentication/components/SnsLoginButton/SnsLoginButton';

export default function SnsLoginButtons() {
  return (
    <>
      <SnsLoginButton
        logoImage="/images/snsLoginButtons/naver_logo.png"
        bgColor="#03C75A"
        textColor="white"
        title="네이버 로그인"
      />
      <SnsLoginButton
        logoImage="/images/snsLoginButtons/kakao_logo.png"
        bgColor="#FEE500"
        textColor="#000000"
        title="카카오 로그인"
      />
      <SnsLoginButton
        logoImage="/images/snsLoginButtons/google_logo.png"
        bgColor="#ffffff"
        textColor="#757575"
        title="Google 로그인"
      />
    </>
  );
}
