import React, { useState } from "react";
import styled from "styled-components";
import { MyButton } from "../Button/CommonButton";
import { PhoneSelect } from "../Button/SelectBox";

import Icon_down from "../../../assets/images/icon-down-arrow.svg";
import Icon_up from "../../../assets/images/icon-up-arrow.svg";
// import { type } from "../../layout/Layout";

// 사용자 정보 타입 정의
type User = {
  id: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

const FormWrapper = styled.form`
  width: 100%;

  & input {
    height: 54px;
    margin-top: 10px;
    padding: 16px;
    outline-color: var(--main-color);
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
  /* margin-bottom: 16px; */
`;

const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  /* 셀렉박스 정렬 맞춤 */
  & article {
    margin-top: 10px;
  }
`;

export const SignUpForm: React.FC = () => {
  // 초기 상태 설정
  const [user, setUser] = useState<User>({
    id: "",
    password: "",
    userName: "",
    phoneNumber: "",
  });

  // 번호 셀렉박스 기능
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("010");

  const handlePhoneButtonClick = () => {
    setPhoneMenuOpen(!phoneMenuOpen);
  };
  const handlePhoneNumberClick = (phoneNumber: string) => {
    setUser({
      ...user,
      phoneNumber: phoneNumber,
    });
    setSelectedPhone(phoneNumber);
    setPhoneMenuOpen(false);
  };

  // 비밀번호 확인
  const [passwordConfirm, setPasswordConfirm] = useState("");

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

    // setUser({ id: "", password: "", userName: "" }); // 폼 초기화
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
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <UserInfoWrapper>
        <Label>
          이름
          <input type="text" name="userName" value={user.userName}></input>
        </Label>
        <Label id="phone">휴대폰번호</Label>
        <PhoneWrapper>
          <PhoneSelect
            isOpen={phoneMenuOpen}
            selectedPhone={selectedPhone}
            handlePhoneNumberClick={handlePhoneNumberClick}
            handlePhoneButtonClick={handlePhoneButtonClick}
          />
          <input type="text" pattern="[0-9]{1,4}" />
          <input type="text" pattern="[0-9]{1,4}" />
        </PhoneWrapper>
      </UserInfoWrapper>
    </FormWrapper>
  );
};

export default SignUpForm;
