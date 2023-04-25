import { Modal } from "antd";
import BoardDetailPagePCUI from "./detail.pc.presenter";
import { MouseEvent, useRef, useState } from "react";

export default function BoardDetailPCPage() {
  const [selectImg, setSelectImg] = useState("/img/shoneyArt.png");
  const [isDetail, setIsDetail] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    const newSrc = event.currentTarget?.src;
    if (imgRef.current) {
      setSelectImg(newSrc);
    }
  };
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
  const onClickArtDetail = () => {
    setIsDetail(true);
  };
  const onClickArtReview = () => {
    setIsDetail(false);
  };
  return (
    <BoardDetailPagePCUI
      selectImg={selectImg}
      isDetail={isDetail}
      imgRef={imgRef}
      onClickSubImage={onClickSubImage}
      onClickBuyButton={onClickBuyButton}
      onClickWishButton={onClickWishButton}
      onClickArtDetail={onClickArtDetail}
      onClickArtReview={onClickArtReview}
    />
  );
}
