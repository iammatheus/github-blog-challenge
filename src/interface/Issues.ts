export interface IssuesItem {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
    html_url: string;
  };
}

export interface Issues {
  total_count: number;
  items: IssuesItem[];
}
