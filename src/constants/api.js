import dzen from './api/dzen.svg'
import facebook from './api/facebook.svg'
import instagram from './api/instagram.svg'
import linkedIn from './api/linked-in.svg'
import ok from './api/ok.svg'
import link from './api/portrait.jpg'
import tg from './api/tg.svg'
import tiktok from './api/tiktok.svg'
import viber from './api/viber.svg'
import vk from './api/vk.svg'
import watsapp from './api/watsapp.svg'
import youtube from './api/youtube.svg'

const networkData = [
  {
    image: tg,
    link: 'https://web.telegram.org/',
    alt: 'Telegram'
  },
  {
    image: watsapp,
    link: 'https://www.whatsapp.com/',
    alt: 'WatsApp'
  },
  {
    image: viber,
    link: 'https://www.viber.com/',
    alt: 'Viber'
  },
  {
    image: instagram,
    link: 'https://www.instagram.com/',
    alt: 'Instagram'
  },
  {
    image: vk,
    link: 'https://vk.com/',
    alt: 'VK'
  },
  {
    image: facebook,
    link: 'https://www.facebook.com/',
    alt: 'Facebook'
  },
  {
    image: youtube,
    link: 'https://www.youtube.com/',
    alt: 'YouTube'
  },
  {
    image: ok,
    link: 'https://ok.ru/',
    alt: 'OK'
  },
  {
    image: dzen,
    link: 'https://dzen.ru/',
    alt: 'Dzen'
  },
  {
    image: tiktok,
    link: 'https://www.tiktok.com/',
    alt: 'TikTok'
  },
  {
    image: linkedIn,
    link: 'https://ru.linkedin.com/',
    alt: 'Linked_In'
  }
]

const personData = {
  name: 'Иванов Иван Петрович',
  position: 'Директор',
  mobile: '+7 (000) 000-00-00',
  call: '+7 (000) 000-00-00',
  email: 'Почта',
  website: 'Личный сайт',
  location: 'Адрес',
  date: 'Дата рождения',
  rank: 'Звание, учёная степень',
  imageLink: link
}

const companyData = {
  name: 'Название компании',
  description: 'Описание компании',
  mobile: '+7 (000) 000-00-00',
  email: 'Почта',
  website: 'Личный сайт',
  location: 'Адрес',
  date: 'Дата рождения',
  client: 'Клиент Клиент Клиент Клиент Клиент Клиент Клиент Клиент Клиент',
  print: 'Факс'
}

export { companyData, networkData, personData }
