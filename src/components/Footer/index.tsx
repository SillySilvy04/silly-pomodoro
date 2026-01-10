import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href=''> Entenda pomodoro básico</a>
      <a href=''> blablablabla &copy; {new Date().getFullYear()} - wawawa</a>
    </footer>
  );
}
