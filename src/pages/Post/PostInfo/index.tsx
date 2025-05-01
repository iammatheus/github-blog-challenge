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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <div>
          <NavLink to="/">
            <CaretLeft size={16} /> Voltar
          </NavLink>
          <NavLink to="#">
            Ver no github <ArrowSquareUpRight size={16} />
          </NavLink>
        </div>

        <h2>JavaScript data types and data structures</h2>
      </PostInfoHeader>

      <PostInfoFooter>
        <PostInfoDetail>
          <GithubLogo size={20} />
          <span>cameronwll</span>
        </PostInfoDetail>
        <PostInfoDetail>
          <Calendar size={20} />
          <span>Há 1 dia</span>
        </PostInfoDetail>
        <PostInfoDetail>
          <ChatCircle size={20} />
          <span>5 comentários</span>
        </PostInfoDetail>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
