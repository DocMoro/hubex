import clsx from 'clsx'

import s from './Field.module.less'

const Field = ({ text, iconType, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <div className={s.field}>
          <div className={clsx(s.icon, s[`icon_type_${iconType}`])}></div>
          <p className={s.text}>{text}</p>
        </div>
      </a>
    )
  }
  return (
    <div className={s.field}>
      <div className={clsx(s.icon, s[`icon_type_${iconType}`])}></div>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Field
