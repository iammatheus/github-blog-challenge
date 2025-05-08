import { useContext } from "react";
import { FormContainer } from "./styles";
import { GithubContext } from "../../../../contexts/GithubContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function ArticleSearchForm() {
  const { issues, fetchIssues } = useContext(GithubContext);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInput) {
    await fetchIssues(data.query);
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues?.total_count}{" "}
          {issues?.total_count === 1 ? "publicação" : "publicações"}
        </span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />

      <button type="submit" style={{ opacity: 0 }}>
        Buscar
      </button>
    </FormContainer>
  );
}
