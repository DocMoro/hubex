import clsx from 'clsx'

import s from './Field.module.less'

const Field = ({ text, iconType }) => {
  return (
    <div className={s.field}>
      <div className={clsx(s.icon, s[`icon_type_${iconType}`])}></div>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Field
