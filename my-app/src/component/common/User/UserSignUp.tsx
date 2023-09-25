import React, { useState } from "react";
import styled from "styled-components";
import { MyButton } from "../Button/CommonButton";

const FormWrapper = styled.form`
  width: 100%;

  & input {
    height: 48px;
    margin-top: 10px;
    padding: 16px;
  }
`;

const IdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  align-items: flex-end;
  gap: 12px;
`;

const Label = styled.label`
  width: 100%;
  display: inline-block;
  font-size: 16px;
  color: var(--grey76);
  margin-top: 10px;
`;

const DuplicatesBtn = styled(MyButton)`
  height: 54px;
  width: 122px;
  /* height: 100%; */
  font-size: 16px;
  font-weight: 500;
`;

const UserInfoWrapper = styled.div`
  margin-top: 50px;
`;

// 사용자 정보 타입 정의
type User = {
  id: string;
  password: string;
  userName: string;
};

export const SignUpForm: React.FC = () => {
  // 초기 상태 설정
  const [user, setUser] = useState<User>({
    id: "",
    password: "",
    userName: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.id || !user.password) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    console.log(user);

    // 여기서 회원가입 로직을 구현할 수 있습니다.
    // 예를 들어, API 호출 등이 이루어질 수 있습니다.

    setUser({ id: "", password: "", userName: "" }); // 폼 초기화
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        아이디
        <IdWrapper>
          <input
            type="email"
            name="id"
            value={user.id}
            onChange={handleChange}
          />
          <DuplicatesBtn width={"ms"} bgColor={"active"}>
            중복확인
          </DuplicatesBtn>
        </IdWrapper>
      </Label>

      <Label>비밀번호</Label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <Label>비밀번호 재확인</Label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <UserInfoWrapper>
        <Label>
          이름
          <input type="text" name="userName" value={user.userName}></input>
        </Label>
        <Label id="phone">휴대폰번호</Label>
      </UserInfoWrapper>
    </FormWrapper>
  );
};

export default SignUpForm;
