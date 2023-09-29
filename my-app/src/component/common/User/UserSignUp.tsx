import React, { useState } from "react";
import styled from "styled-components";
import { MyButton } from "../Button/CommonButton";
import { PhoneSelect } from "../Button/SelectBox";

// import { type } from "../../layout/Layout";

const USER_TYPE = {
  SELLER: "SELLER",
  BUYER: "BUYER",
};

type SignUpFormProps = {
  tempUserType: string;
};

// 사용자 정보 타입 정의
type User = {
  id: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

const FormWrapper = styled.form`
  width: 100%;
  /* padding: 35px; */
  margin-top: 70px;

  & input {
    width: 100%;
    color: var(--grey76);
    border-radius: 10px;
    border: 1px solid var(--greyC4);
    height: 54px;
    margin-top: 10px;
    padding: 16x;
  }
`;

const InputWrapper = styled.section`
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  padding: 35px;
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

const CheckBtn = styled(MyButton)`
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

const JoinAgreeText = styled.p`
  width: 100%;
  color: var(--greyC4);
  display: flex;
  gap: 14px;
  align-items: flex-start;
  justify-content: center;
  padding: 34px 10px;

  input {
    width: 16px;
    height: 100%;
    margin-top: 0;
  }

  span {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const SellerInputs = styled.section`
  width: 100%;
`;

export const SignUpForm: React.FC<SignUpFormProps> = ({ tempUserType }) => {
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

  // 동의 체크박스
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

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
      <InputWrapper>
        <Label>
          아이디
          <IdWrapper>
            <input
              type="email"
              name="id"
              value={user.id}
              onChange={handleChange}
            />
            <CheckBtn width={"ms"} bgColor={"active"}>
              중복확인
            </CheckBtn>
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
        {tempUserType === "SELLER" && (
          <SellerInputs>
            <Label>
              사업자등록번호
              <input type="text" name="userName" value={user.userName}></input>
              <CheckBtn width={"ms"} bgColor={"active"}>
                인증
              </CheckBtn>
            </Label>
          </SellerInputs>
        )}
      </InputWrapper>

      <JoinAgreeText>
        <input
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check">
          호두샵의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 대한
          내용을 확인하였고 동의합니다.
        </label>
      </JoinAgreeText>
      <MyButton
        width={"md"}
        type={"submit"}
        bgColor={"active"}
        // disabled={disabled}
        // onClick={onclick}
      >
        가입하기
      </MyButton>
    </FormWrapper>
  );
};
