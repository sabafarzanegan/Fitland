import { getComment } from "@/utils/type";
import CommentItem from "./CommentItem";

function CommnetList({
  comments,
}: {
  comments: getComment[] | undefined | null;
}) {
  return (
    <>
      <div className="h-[500px] overflow-y-auto w-full overflow-x-hidden space-y-4">
        {comments?.map((item) => (
          <CommentItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default CommnetList;
