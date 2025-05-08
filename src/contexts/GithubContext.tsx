import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";
import { UserProfile } from "../interface/UserProfile";
import { Issues, IssuesItem } from "../interface/Issues";

interface GithubContextType {
  fetchProfileData: () => Promise<UserProfile>;
  fetchIssues: (query?: string) => Promise<Issues>;
  fetchIssueByNumber: (number: number) => Promise<IssuesItem>;
  issues: Issues;
}

export const GithubContext = createContext({} as GithubContextType);

interface GithubProviderProps {
  children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [issues, setIssues] = useState<Issues>({} as Issues);

  async function fetchProfileData(): Promise<UserProfile> {
    const { data } = await api.get("/users/iammatheus");
    const { id, name, login, bio, followers, html_url, avatar_url, company } =
      data;

    return { id, name, login, bio, followers, html_url, avatar_url, company };
  }

  async function fetchIssues(query: string = ""): Promise<Issues> {
    const { data } = await api.get("/search/issues", {
      params: {
        q: `${query} repo:iammatheus/github-blog-challenge`,
      },
    });
    setIssues(data);
    return data;
  }

  async function fetchIssueByNumber(numberIssue: number): Promise<IssuesItem> {
    const { data } = await api.get(
      `/repos/iammatheus/github-blog-challenge/issues/${numberIssue}`
    );

    return data;
  }

  return (
    <GithubContext.Provider
      value={{ fetchProfileData, fetchIssues, fetchIssueByNumber, issues }}
    >
      {children}
    </GithubContext.Provider>
  );
}
