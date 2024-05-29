import clsx from 'clsx'

import s from './Field.module.less'

const Field = ({ text, iconType, link }) => {
  if (link) {
    return (
      <li>
        <a className={s.field} href={link} target="_blank" rel="noreferrer">
          <div className={clsx(s.icon, s[`icon_type_${iconType}`])}></div>
          <p className={s.text}>{text}</p>
        </a>
      </li>
    )
  }
  return (
    <li className={s.field}>
      <div className={clsx(s.icon, s[`icon_type_${iconType}`])}></div>
      <p className={s.text}>{text}</p>
    </li>
  )
}

export default Field
