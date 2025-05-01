import { createContext, ReactNode } from "react";
import { api } from "../lib/axios";
import { UserProfile } from "../interface/UserProfile";

interface GithubContextType {
  fetchProfileData: () => Promise<UserProfile>;
}

export const GithubContext = createContext({} as GithubContextType);

interface GithubProviderProps {
  children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
  async function fetchProfileData(): Promise<UserProfile> {
    const { data } = await api.get("/iammatheus");
    const { id, name, login, bio, followers, html_url, avatar_url, company } =
      data;

    return { id, name, login, bio, followers, html_url, avatar_url, company };
  }

  return (
    <GithubContext.Provider value={{ fetchProfileData }}>
      {children}
    </GithubContext.Provider>
  );
}
