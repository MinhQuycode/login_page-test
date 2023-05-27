import { useState } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import right_bg from "../../assets/right-bg.png";
import Input from "../../components/Input/Input";

const LoginPage = () => {
  const [dataForm, setDataFrom] = useState({
    email: "",
    password: "",
  });
  const [hidePass, setHidePass] = useState(true);

  const onChangeEmail = (value: string) => {
    setDataFrom({ ...dataForm, email: value });
  };
  const onChangePassword = (value: string) => {
    setDataFrom({ ...dataForm, password: value });
  };

  return (
    <LoginPageWrap>
      <div className="left-page">
        <div className="container_left-page">
          <Heading text="Log in to your Account" fsize="30px" />
          <p className="title-wellcom">
            Welcome back! Select method to log in:
          </p>
          <div className="method-socile">
            <Button icon={<BsGoogle />} title="Google" action={() => {}} />
            <Button icon={<BsFacebook />} title="Facebook" action={() => {}} />
          </div>
          <div className="line-continue">
            <span>or continue with email</span>
          </div>

          <div className="form">
            <Input
              iconLeft={<AiOutlineMail />}
              placeholder="Email"
              type="text"
              value={dataForm.email}
              onChange={onChangeEmail}
            />
            <Input
              iconLeft={<AiOutlineLock />}
              placeholder="Password"
              type={!hidePass ? "text" : "password"}
              value={dataForm.password}
              onChange={onChangePassword}
              actionIconRight={() => setHidePass((pre) => !pre)}
              iconRight={
                !hidePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />

            <Button
              disable={false}
              title="Login"
              bgColor="#065ad8"
              action={() => {}}
            />
          </div>

          <p className="suggest_regis">
            Don't have an account? <span>Create an account</span>
          </p>
        </div>
      </div>

      <div className="right-page">
        <img src={right_bg} alt="Right bg" />
      </div>
    </LoginPageWrap>
  );
};

export default LoginPage;

const LoginPageWrap = styled.div`
  position: relative;
  max-width: 1336px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  min-height: 100vh;
  .method-socile {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 30px 0;
  }
  .line-continue {
    height: 1px;
    background-color: black;
    width: 100%;
    position: relative;
    margin: 30px 0;
    span {
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      font-size: 12px;
    }
  }
  .left-page {
    width: 50%;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .title-wellcom {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 44px;
      color: #2927277c;
      margin-bottom: 20px;
    }
    .container_left-page {
      width: 80%;
    }
    .form {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
  .suggest_regis {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
      color: #065ad8;
    }
  }

  .right-page {
    width: 50%;
    max-height: 100vh;
    img {
      width: 100%;
      object-fit: cover;
      height: 100vh;
    }
  }

  @media (max-width: 900px) {
    .right-page {
      display: none;
    }
    .left-page {
      padding: 10px;
      .container_left-page {
        width: 90%;
      }
    }
  }
`;
