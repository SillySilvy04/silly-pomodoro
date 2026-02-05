import style from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={style.footer}>
      <RouterLink href='/about-pomodoro/'> Entenda pomodoro básico</RouterLink>
      <RouterLink href='/'>
        <p>Feito com 💜 em Seropédica - RJ (2026)</p>
      </RouterLink>
    </footer>
  );
}
