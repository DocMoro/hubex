import s from './DesktopImageContainer.module.less'

const DesktopImageContainer = ({ imageLink }) => {
  return (
    <div className={s.container}>
      <img className={s.image} src={imageLink} alt="Фото руководителя" />
      <button className={s.button}>ДОБАВИТЬ В КОНТАКТЫ</button>
    </div>
  )
}

export default DesktopImageContainer
