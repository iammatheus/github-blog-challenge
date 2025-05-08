import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import {
  PostInfoContainer,
  PostInfoDetail,
  PostInfoFooter,
  PostInfoHeader,
} from "./styles";
import { NavLink } from "react-router-dom";
import { IssuesItem } from "../../../interface/Issues";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function PostInfo({
  html_url,
  title,
  created_at,
  comments,
  user,
}: IssuesItem) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <div>
          <NavLink to="/">
            <CaretLeft size={16} /> Voltar
          </NavLink>
          <NavLink to={html_url} target="_blank">
            Ver no github <ArrowSquareUpRight size={16} />
          </NavLink>
        </div>

        <h2>{title}</h2>
      </PostInfoHeader>

      <PostInfoFooter>
        <PostInfoDetail>
          <GithubLogo size={20} />
          <span>{user?.login}</span>
        </PostInfoDetail>
        <PostInfoDetail>
          <Calendar size={20} />
          <span>
            {created_at ? (
              <span>
                {formatDistanceToNow(new Date(created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            ) : (
              ""
            )}
          </span>
        </PostInfoDetail>
        <PostInfoDetail>
          <ChatCircle size={20} />
          <span>{comments}</span>
        </PostInfoDetail>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
