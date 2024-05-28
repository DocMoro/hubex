import { networkData } from '../../constants/api'
import s from './Footer.module.less'

const Footer = () => {
  return (
    <footer>
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
