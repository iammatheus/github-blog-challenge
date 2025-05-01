import { FormContainer } from "./styles";

export function ArticleSearchForm() {
  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainer>
  );
}
