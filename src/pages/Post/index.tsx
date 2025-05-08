import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import { PostContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../contexts/GithubContext";
import { IssuesItem } from "../../interface/Issues";

export function Post() {
  const { number } = useParams();
  const { fetchIssueByNumber } = useContext(GithubContext);
  const [issue, setIssue] = useState<IssuesItem>({} as IssuesItem);

  async function getIssueByNumber(issueNumber: number) {
    const data = await fetchIssueByNumber(issueNumber);
    setIssue(data);
  }

  useEffect(() => {
    getIssueByNumber(Number(number));
  }, []);

  return (
    <PostContainer>
      <PostInfo {...issue} />
      <PostContent body={issue.body} />
    </PostContainer>
  );
}
