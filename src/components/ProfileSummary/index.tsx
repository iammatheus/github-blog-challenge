import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";

import avatar from "../../assets/avatar.png";
import {
  SummaryContainer,
  SummaryContent,
  SummaryDescription,
  SummaryFooter,
  SummaryHeader,
  SummaryInfo,
} from "./styles";

export function ProfileSummary() {
  return (
    <SummaryContainer>
      <img src={avatar} alt="" />

      <SummaryContent>
        <SummaryHeader>
          <h1>Cameron Williamson</h1>
          <a href="#">
            <span>Github</span>
            <ArrowSquareUpRight size={16} />
          </a>
        </SummaryHeader>

        <SummaryDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </SummaryDescription>

        <SummaryFooter>
          <SummaryInfo>
            <GithubLogo size={20} />
            <span>cameronwll</span>
          </SummaryInfo>
          <SummaryInfo>
            <Buildings size={20} />
            <span>Rocketseat</span>
          </SummaryInfo>
          <SummaryInfo>
            <Users size={20} />
            <span>32 seguidores</span>
          </SummaryInfo>
        </SummaryFooter>
      </SummaryContent>
    </SummaryContainer>
  );
}
