import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className="container">
      <span>
        Source code on{' '}
        <a
          href="https://github.com/aXenDeveloper/react-players-stats"
          target="blank"
          rel="noopener nofollow"
        >
          GitHub
        </a>
      </span>

      <span>
        Create by{' '}
        <a href="https://axendev.net/" target="blank" rel="noopener nofollow">
          aXenDev
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
