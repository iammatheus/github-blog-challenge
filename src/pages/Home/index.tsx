import { ProfileSummary } from "./components/ProfileSummary";
import { Article } from "./components/Article";
import { ArticleSearchForm } from "./components/ArticleSearchForm";
import { HomeContent } from "./styles";

export function Home() {
  return (
    <div>
      <HomeContent>
        <ProfileSummary />

        <ArticleSearchForm />
        <Article />
      </HomeContent>
    </div>
  );
}
