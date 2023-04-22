import { useRouter } from "next/router";
import BoardListPageUI from "./list.presenter";
import { useMediaQuery } from "@react-hook/media-query";

export default function BoardListPage() {
  const isScreen = useMediaQuery("(min-width: 660px)");
  console.log(isScreen);
  const router = useRouter();
  const onClickUpload = () => {
    router.push("/boards/new");
  };
  return <BoardListPageUI onClickUpload={onClickUpload} isScreen={isScreen} />;
}
