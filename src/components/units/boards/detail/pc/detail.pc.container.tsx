import { Modal } from "antd";
import BoardDetailPagePCUI from "./detail.pc.presenter";

export default function BoardDetailPCPage() {
  const onClickBuyButton = () => {
    Modal.success({
      content: "상품구매가 완료되었습니다",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
  };
  const onClickWishButton = () => {
    Modal.success({
      content: "관심상품으로 등록되었습니다",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
  };
  return (
    <BoardDetailPagePCUI
      onClickBuyButton={onClickBuyButton}
      onClickWishButton={onClickWishButton}
    />
  );
}
