import clsx from 'clsx'

import s from './MobileImageContainer.module.less'

const MobileImageContainer = ({ imageLink, className }) => {
  return (
    <div className={clsx(s.container, className && className)}>
      <img className={s.image} src={imageLink} alt="Фото руководителя" />
      <div className={s.btnGroup}>
        <button className={s.button}>
          <div className={clsx(s.btnIcon, s.btnIconTypeSave)}></div>
          <p className={s.btnText}>Сохранить визитку</p>
        </button>
        <button className={s.button}>
          <div className={clsx(s.btnIcon, s.btnIconTypeCall)}></div>
          <p className={s.btnText}>Позвонить</p>
        </button>
      </div>
    </div>
  )
}

export default MobileImageContainer
