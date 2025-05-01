import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostContent />
    </PostContainer>
  );
}
