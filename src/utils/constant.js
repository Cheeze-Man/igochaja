export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
export const namePattern = /^[가-힣]{2,4}$/;

export const SIGNUP_INPUT_FIELDS = [
  {
    name: 'name',
    type: 'text',
    title: '이름',
    placeholder: '이름을 입력해 주세요. (한국어 이름)',
  },
  {
    name: 'email',
    type: 'email',
    title: '이메일 주소',
    placeholder: 'ex) igochaja@email.com',
  },
  {
    name: 'password',
    type: 'password',
    title: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요.',
  },
  {
    name: 'passwordCheck',
    type: 'password',
    title: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력해 주세요.',
  },
];
