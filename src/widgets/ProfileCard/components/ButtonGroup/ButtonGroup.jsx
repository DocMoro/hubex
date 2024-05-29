import clsx from 'clsx'

import s from './ButtonGroup.module.less'

const ButtonGroup = ({ visible, handleClick }) => {
  return (
    <div className={s.buttonContainer}>
      <button className={clsx(s.button, visible && s.buttonActive)} disabled={!visible} onClick={handleClick}>
        <div className={s.iconPointer}></div>
        <p>о сотруднике</p>
      </button>
      <button className={clsx(s.button, !visible && s.buttonActive)} disabled={visible} onClick={handleClick}>
        <p>о компании</p>
        <div className={clsx(s.iconPointer, s.iconTransform)}></div>
      </button>
    </div>
  )
}

export default ButtonGroup
