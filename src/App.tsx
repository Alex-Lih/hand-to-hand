import './App.css'
import Header from './components/header/header'
import Card from './components/card/card'
import Menu from './components/menu/menu'
import items from './assets/db.json'
import React from "react"

console.log(items);

function App() {
    const [Visible, setVisible] = React.useState(false);

    return (
    <>
    {Visible && (
        <Menu />
    )}
    <div className='wrapper' onClick={() => setVisible(!Visible)}>
        <Header />
        <div className="main">
            {
                items.map((obj)=> (
                <Card {...obj}/>
            ))}
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
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms & Conditions</a>
                </div>
                <p className=''>«2023© ООО «КазаньЭкспресс». ИНН 1648054022. Все права защищены»</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default App
