import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página não encontrada</Heading>
          <p>
            Poxa, parece que a página que você está tentando acessar não existe
            :((
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
