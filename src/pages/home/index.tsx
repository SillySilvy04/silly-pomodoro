import { Container } from '../../components/Container';
import { CountDown } from '../../components/Countdown';
import { Form } from '../../components/Form';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form />
      </Container>
    </MainTemplate>
  );
}
