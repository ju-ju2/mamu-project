import CommentListUIPage from "./commentList.presenter";

export default function CommentListPage() {
  const onClickModify = () => {};
  const onClickDelete = () => {};
  return (
    <CommentListUIPage
      onClickModify={onClickModify}
      onClickDelete={onClickDelete}
    />
  );
}
