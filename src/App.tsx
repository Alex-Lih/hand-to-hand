import './App.css'
import Header from './components/header/header'
import Card from './components/card/card'

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <div className="main">
            <Card price={3725}/>
            <Card price={34534}/>
            <Card price={4554}/>
            <Card price={5545}/>
            <Card price={46}/>
            <Card price={67}/>
            <Card price={9999999}/>
            <Card price={3756725}/>
            <Card price={567567}/>
            <Card price={667}/>
            <Card price={500}/>
            <Card price={499}/>
            <Card price={677}/>
            <Card price={665}/>
            <Card price={55555}/>
        </div>
        <footer className='footer'>
            <div className="footer-top">
                <div className="footer_cool spoiler">
                    <ul className='footer__list'>
                        <li className='footer__list-item'>О нас</li>
                        <li className='footer__list-item'>О компании</li>
                        <li className='footer__list-item'>Вакансии</li>
                        <li className='footer__list-item'>СМИ о нас</li>
                        <li className='footer__list-item'>Контакты</li>
                        <li className='footer__list-item'>Пункты выдачи</li>
                        <li className='footer__list-item'>Экология</li>
                        <li className='footer__list-item'>Благотворительность</li>
                    </ul>
                </div>
                <div className="footer_cool spoiler">
                    <ul className='footer__list'>
                        <li className='footer__list-item'>О нас</li>
                        <li className='footer__list-item'>О компании</li>
                        <li className='footer__list-item'>Вакансии</li>
                        <li className='footer__list-item'>СМИ о нас</li>
                        <li className='footer__list-item'>Контакты</li>
                        <li className='footer__list-item'>Пункты выдачи</li>
                        <li className='footer__list-item'>Экология</li>
                        <li className='footer__list-item'>Благотворительность</li>
                    </ul>
                </div>
                <div className="footer_cool spoiler">
                    <ul className='footer__list'>
                        <li className='footer__list-item'>О нас</li>
                        <li className='footer__list-item'>О компании</li>
                        <li className='footer__list-item'>Вакансии</li>
                        <li className='footer__list-item'>СМИ о нас</li>
                        <li className='footer__list-item'>Контакты</li>
                        <li className='footer__list-item'>Пункты выдачи</li>
                        <li className='footer__list-item'>Экология</li>
                        <li className='footer__list-item'>Благотворительность</li>
                    </ul>
                </div>
                <div className="footer_cool spoiler">
                    <div className='qr'>

                    </div>
                    <div className=''>
                        <span>KazanExpress в социальных сетях:</span>
                        <ul>

                        </ul>
                        <span>По общим вопросам: 8 800 700 96 16</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <a href='#'>Соглашение о конфиденциальности</a>
                    <a href='#'>Пользовательское соглашение</a>
                </div>
                <p className=''>«2023© ООО «КазаньЭкспресс». ИНН 1648054022. Все права защищены»</p>
            </div>
        </footer>
    </div>
  )
}

export default App
