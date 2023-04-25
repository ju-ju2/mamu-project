import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import BoardDetailMobilePage from "../../../src/components/units/boards/detail/mobile/detail.m.container";
import BoardDetailPCPage from "../../../src/components/units/boards/detail/pc/detail.pc.container";

export default function BoardDetail() {
  // SSR 문제 해결을 위한 로직
  const [isMobile, setIsMobile] = useState(false);
  const screen = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (screen) {
      setIsMobile(false);
    } else setIsMobile(true);
  }, [screen]);
  // /////////////////////
  return <>{isMobile ? <BoardDetailMobilePage /> : <BoardDetailPCPage />}</>;
}
