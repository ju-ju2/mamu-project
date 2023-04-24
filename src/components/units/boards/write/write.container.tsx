import { useRouter } from "next/router";
import BoardWritePageUI from "./write.presenter";
import { Modal } from "antd";

export default function BoardWritePage() {
  const router = useRouter();
  const onClickUpload = () => {
    Modal.success({
      content: "게시물이 등록되었습니다.",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    router.push("/");
  };
  return <BoardWritePageUI onClickUpload={onClickUpload} />;
}
