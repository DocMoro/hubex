import clsx from 'clsx'

import s from './Logo.module.less'

const Logo = ({ className }) => {
  return <div className={clsx(s.logo, className && className)}></div>
}

export default Logo
