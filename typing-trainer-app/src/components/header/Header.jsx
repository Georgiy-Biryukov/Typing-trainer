import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { restart } from '../../store/typingField.slice';

import { useTheme } from '../../hooks/use-theme';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LogoMobile } from '../../assets/logo-mobile.svg';
import { ReactComponent as NightMode } from '../../assets/nigthMode.svg';
import { ReactComponent as LightMode } from '../../assets/ligthMode.svg';
import { ReactComponent as ReloadIcon } from '../../assets/reload.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/burger-close.svg';
import { ReactComponent as ResultIcon } from '../../assets/resultIcon.svg';
import SashaGrey from '../../assets/Grey.jpg';

import './styles.scss';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const dispatch = useDispatch();

  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };



  const navDropdownTitle = (
    <p>
      Більше
      <ArrowDownIcon />
    </p>
  );

  return (
    <Navbar
      expand="lg"
      className={isOpenMenu ? 'header-menu-open' : 'header-menu'}
      onToggle={() => setIsOpenMenu(!isOpenMenu)}
      variant="primary"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <Logo className={'logo'} />
            <LogoMobile className={'logo-mobile'} />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          {isOpenMenu ? (
            <BurgerCloseIcon className="burger-icon" />
          ) : (
            <BurgerIcon className="burger-icon" />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-list">
            <Nav.Link as={Link} to="/test">
              Тест
            </Nav.Link>
            <Nav.Link as={Link} to="/trainer">
              Тренажер
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Навчання
            </Nav.Link>
            <NavDropdown
              style={{ order: 4 }}
              title={navDropdownTitle}
              id="basic-nav-dropdown"
              className="desktop-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Для вчителів
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Про нас</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Рейтинг</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Допомога</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Контакти</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Підтримати проєкт
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="nav-item-mobile">
              Для вчителів
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item-mobile">
              Про нас
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item-mobile">
              Рейтинг
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item-mobile">
              Допомога
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item-mobile">
              Контакти
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item-mobile">
              Підтримати проєкт
            </Nav.Link>
          </Nav>
          <div className="user">
            <div className="user-avatar-holder">
              <img className="avatar" src={SashaGrey} alt="user-avatar" />
            </div>
            <div className="user-info">
              <p>Alex</p>
              <div className="user-achievements">
                <ResultIcon />
                <span>35 543</span>
              </div>
            </div>
          </div>
        </Navbar.Collapse>

        <div className="groupBox">
          <button
            className="groupBoxItem icon-btn"
            onClick={() => dispatch(restart())}
          >
            <ReloadIcon />
          </button>
          <button
            className="groupBoxItem icon-btn"
            onClick={() =>
              theme === 'dark'
                ? handleLightThemeClick()
                : handleDarkThemeClick()
            }
          >
            {theme === 'dark' ? <LightMode /> : <NightMode />}
          </button>
          <Link to="#" className="groupBoxItem avatar">
            <img src={SashaGrey} alt="user-avatar" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
