import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Menu from '../components/Menu'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style/Header.css'

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Menu />
            <div className="title_menu">
              <div></div>
              <p> <b>GabrielaDev</b>.com</p>
              <div className="icons_menu">
                <li>
                <a href="https://www.linkedin.com/in/gabriela-gontijo/"
                alt="Linkedin"
                target="_blank"
                rel="noreferrer"><LinkedInIcon sx={{ fontSize: '2rem', color:'#ecf0f1' }}/></a>
                </li>
                <li>
                <a href="https://github.com/gabigontijo"
                alt="git hub"
                target="_blank"
                rel="noreferrer"> <GitHubIcon sx={{ fontSize: '2rem', color:'#ecf0f1' }}/> </a>
                </li>
                <li>
                <a href="#contact"
                alt="portifolio"
                > <ContactPhoneIcon  sx={{ fontSize: '2rem', color:'#ecf0f1' }}/> </a>
                  </li>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}