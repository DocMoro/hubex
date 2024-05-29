import clsx from 'clsx'

import s from './Footer.module.less'

const Footer = ({ networkData, className }) => {
  return (
    <footer className={clsx(s.footer, className && className)}>
      <ul className={s.list}>
        {networkData.map((el, index) => (
          <li key={index} className={s.cell}>
            <a href={el.link} className={s.link}>
              <img className={s.image} src={el.image} alt={el.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
