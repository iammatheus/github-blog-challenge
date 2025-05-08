import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";

import {
  SummaryContainer,
  SummaryContent,
  SummaryDescription,
  SummaryFooter,
  SummaryHeader,
  SummaryInfo,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../../../contexts/GithubContext";
import { UserProfile } from "../../../../interface/UserProfile";
import { NavLink } from "react-router-dom";

export function ProfileSummary() {
  const { fetchProfileData } = useContext(GithubContext);
  const [profileData, setProfileData] = useState<UserProfile>(
    {} as UserProfile
  );

  async function loadProfileData() {
    const data = await fetchProfileData();
    setProfileData(data);
  }

  useEffect(() => {
    loadProfileData();
  }, []);

  return (
    <SummaryContainer>
      <img src={profileData.avatar_url} alt="" />

      <SummaryContent>
        <SummaryHeader>
          <h1>{profileData.name}</h1>
          <NavLink to={profileData.html_url} target="_blank">
            <span>Github</span>
            <ArrowSquareUpRight size={16} />
          </NavLink>
        </SummaryHeader>

        <SummaryDescription>{profileData.bio}</SummaryDescription>

        <SummaryFooter>
          <SummaryInfo>
            <GithubLogo size={20} />
            <span>{profileData.login}</span>
          </SummaryInfo>
          <SummaryInfo>
            <Buildings size={20} />
            <span>{profileData.company}</span>
          </SummaryInfo>
          <SummaryInfo>
            <Users size={20} />
            <span>{profileData.followers} seguidores</span>
          </SummaryInfo>
        </SummaryFooter>
      </SummaryContent>
    </SummaryContainer>
  );
}
