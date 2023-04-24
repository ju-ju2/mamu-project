import { useRouter } from "next/router";
import BoardListPageUI from "./list.presenter";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

export default function BoardListPage() {
  // const [isScreen, setIsScreen] = useState(false);

  // SSR 문제 해결을 위한 로직
  // const screen = useMediaQuery("(min-width: 660px)");
  // useEffect(() => {
  //   if (screen) {
  //     setIsScreen(true);
  //   } else setIsScreen(false);
  // }, [screen]);

  // const router = useRouter();
  // const onClickUpload = () => {
  //   router.push("/boards/new");
  // };
  // return <BoardListPageUI onClickUpload={onClickUpload} isScreen={isScreen} />;
  return <BoardListPageUI />;
}
