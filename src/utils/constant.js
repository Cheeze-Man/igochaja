export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
export const namePattern = /^[가-힣]{2,8}$/;

export const SIGNUP_INPUT_FIELDS = [
  {
    name: 'name',
    type: 'text',
    title: '이름',
    placeholder: '이름을 입력해 주세요. (한국어 이름)',
    message: '한글 이름 2~8자만 입력 가능합니다.',
  },
  {
    name: 'email',
    type: 'email',
    title: '이메일 주소',
    placeholder: 'ex) igochaja@email.com',
    message: '올바른 이메일 형식이 아닙니다',
  },
  {
    name: 'password',
    type: 'password',
    title: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요.',
    message: '영문, 숫자, 특수문자를 조합하여 8~16자로 입력해주세요.',
  },
  {
    name: 'passwordCheck',
    type: 'password',
    title: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력해 주세요.',
    message: '비밀번호와 다릅니다. 다시 확인해주세요.',
  },
];
