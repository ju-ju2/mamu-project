import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import BoardDetailUIPage from "./detail.presenter";

export default function BoardDetailPage() {
  // SSR 문제 해결을 위한 로직
  const [isMobile, setIsMobile] = useState(false);
  const screen = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (screen) {
      setIsMobile(false);
    } else setIsMobile(true);
  }, [screen]);
  // /////////////////////
  const [isDetail, setIsDetail] = useState(true);

  const onClickArtDetail = () => {
    setIsDetail(true);
  };
  const onClickArtReview = () => {
    setIsDetail(false);
  };
  return (
    <BoardDetailUIPage
      isMobile={isMobile}
      isDetail={isDetail}
      onClickArtDetail={onClickArtDetail}
      onClickArtReview={onClickArtReview}
    />
  );
}
