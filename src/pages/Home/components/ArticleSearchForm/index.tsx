import { useContext, useEffect, useState } from "react";
import { FormContainer } from "./styles";
import { GithubContext } from "../../../../contexts/GithubContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

const DEBOUNCE_DELAY = 500;

export function ArticleSearchForm() {
  const { issues, fetchIssues } = useContext(GithubContext);
  const [debouncedValue, setDebouncedValue] = useState("");

  const { register, watch } = useForm({
    resolver: zodResolver(searchFormSchema),
  });

  const query = watch("query");

  async function handleSearchIssues(data: SearchFormInput) {
    await fetchIssues(data.query);
  }

  useEffect(() => {
    const handlerDebounce = setTimeout(() => {
      setDebouncedValue(query);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handlerDebounce);
    };
  }, [query]);

  useEffect(() => {
    handleSearchIssues({ query });
  }, [debouncedValue]);

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues?.total_count}{" "}
          {issues?.total_count === 1 ? "publicação" : "publicações"}
        </span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </FormContainer>
  );
}
