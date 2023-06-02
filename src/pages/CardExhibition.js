import React from 'react';
import { Paper }from '@mui/material';
import  {styled} from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import avatarGabi from '../images/avatGabi.png'
import ComputerIcon from '@mui/icons-material/Computer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style/CardIcon.css'

const PaperCustom = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

export default function CardExhibition() {
    return (
        <div className="main">
            <PaperCustom elevation={4} className="main_paper">
                <div className="div_paper">
                    <section className="section_header" >
                        <div className="section_avatar">
                        <Avatar
                        className='avatar'
                        alt="Gabriela Gontijo"
                        src={avatarGabi}
                        sx={{ width: 210, height: 210 }} />
                        </div>
                        <h1>Gabriela Gontijo</h1>
                        <p>Software Developer</p>
                    </section>
                    <section className="section_icons_btns">
                        <button> <a href="https://gabigontijo.github.io" alt="portifolio" target="_blank" rel="noreferrer"><ComputerIcon  color="disabled" sx={{ fontSize: '2.8rem' }} /></a></button>
                        <button><a href="https://github.com/gabigontijo" alt="gitHub" target="_blank" rel="noreferrer"><GitHubIcon color="disabled" sx={{ fontSize: '2.8rem' }} /></a></button>
                        <button><a href="https://www.linkedin.com/in/gabriela-gontijo/" alt="Linkedin" target="_blank" rel="noreferrer"><LinkedInIcon color="disabled" sx={{ fontSize: '2.8rem' }}/></a></button>

                    </section>
                    </div>
            </PaperCustom>

        </div>
    );
}