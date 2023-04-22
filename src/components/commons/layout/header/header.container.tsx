import Avvvatars from "avvvatars-react";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../../commons/store";
import { useRouter } from "next/router";
import { Modal } from "antd";
import HeaderUI from "./header.presenter";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const onClickGoToLogin = () => {
    router.push("/login");
  };
  const onClickLogout = () => {
    setIsLogin((prev) => !prev);
    Modal.info({
      content: "로그아웃 완료",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    router.push("/");
  };
  const onClickGotoHome = () => {
    router.push("/");
  };

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
    />
  );
}
