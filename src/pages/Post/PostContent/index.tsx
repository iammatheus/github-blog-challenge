import Markdown from "react-markdown";
import { PostContentContainer } from "./styles";
import remarkGfm from "remark-gfm";

interface PostContentProps {
  body: string;
}

export function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
    </PostContentContainer>
  );
}
