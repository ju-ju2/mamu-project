import Avvvatars from "avvvatars-react";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../../commons/store";
import { useRouter } from "next/router";
import { Modal } from "antd";
import HeaderUI from "./header.presenter";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const onClickGoToLogin = () => {
    router.push("/login");
  };
  const onClickLogout = () => {
    setIsLogin((prev) => !prev);
    Modal.success({
      content: "로그아웃 완료",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    router.push("/");
  };
  const onClickGotoHome = () => {
    router.push("/");
  };
  const [isMobile, setIsMobile] = useState(false);

  // SSR 문제 해결을 위한 로직
  const screen = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (screen) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [screen]);

  // const [position, setPosition] = useState(0);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = useCallback(() => {
  //   const moving = window.pageYOffset;
  //   setVisible(position > moving);
  //   setPosition(moving);
  //   console.log(visible);
  // }, [position]);

  return (
    <HeaderUI
      onClickGoToLogin={onClickGoToLogin}
      onClickLogout={onClickLogout}
      onClickGotoHome={onClickGotoHome}
      isLogin={isLogin}
      isMobile={isMobile}
    />
  );
}
