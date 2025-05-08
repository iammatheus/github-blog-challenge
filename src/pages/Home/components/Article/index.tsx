import { useContext, useEffect } from "react";
import { ArticleContainer, ArticleContent } from "./styles";
import { GithubContext } from "../../../../contexts/GithubContext";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Article() {
  const { issues, fetchIssues } = useContext(GithubContext);

  async function loadIssues() {
    await fetchIssues();
  }

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <ArticleContainer>
      {issues.items && issues.items.length > 0 ? (
        issues.items.map((issue) => {
          return (
            <Link to={`/details/${issue.number}`}>
              <ArticleContent>
                <header>
                  <h2>{issue.title}</h2>
                  <span>
                    {formatDistanceToNow(new Date(issue.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </header>

                <p>
                  <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
                </p>
              </ArticleContent>
            </Link>
          );
        })
      ) : (
        <h3>Nenhuma issue cadastrada.</h3>
      )}
    </ArticleContainer>
  );
}
