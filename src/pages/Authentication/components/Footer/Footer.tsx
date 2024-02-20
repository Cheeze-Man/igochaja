import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <section className="top">
        <img src="images/logo.png" />
        <div className="links">
          <div className="linksColumn">
            <h2>이용안내</h2>
            <a>이용정책</a>
            <a>페널티 정책</a>
            <a>커뮤니티 가이드라인</a>
          </div>
          <div className="linksColumn">
            <h2>고객지원</h2>
            <a>공지사항</a>
            <a>서비스 소개</a>
            <a>문의</a>
          </div>
          <div className="linksColumn">
            <h2>고객지원</h2>
            <a>공지사항</a>
            <a>서비스 소개</a>
            <a>문의</a>
          </div>
          <div className="linksColumn socialsColumn">
            <h2>소셜 미디어</h2>
            <div className="socials">
              <a className="socialLink"></a>
              <a className="socialLink"></a>
              <a className="socialLink"></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <p className="copyright">© 2024 IGOCHAJA FROM CODUCK</p>
        <div className="legal">
          <a> Contact </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </section>
    </footer>
  );
}
