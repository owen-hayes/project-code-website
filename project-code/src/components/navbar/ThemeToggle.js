import React, { useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './ThemeToggle.css';
import { useTheme } from '@mui/material';

export default function ThemeToggle(props) {

    useEffect(() => {
        updateTheme(props.darkState);
    }, [props.darkState]);

    const theme = useTheme();
    const updateTheme = (isDarkEnabled) => {

        const white = theme.palette.barBg.white;
        const black = theme.palette.barBg.black;

        const docEl = document.documentElement;
        if (isDarkEnabled) {
            docEl.style.setProperty('--background', black);
            docEl.style.setProperty('--foreground', white);
        } else {
            docEl.style.setProperty('--background', white);
            docEl.style.setProperty('--foreground', black);
        }
    }

    return (
        <label className='toggle-wrapper' htmlFor='toggle'>
            <div className={`toggle ${props.darkState ? 'enabled' : 'disabled'}`}>
                <span className='hidden'>
                    {props.darkState ? 'Enable Light Mode' : 'Enable Dark Mode'}
                </span>
                <div className='icons'>
                    <LightModeIcon />
                    <DarkModeIcon />
                </div>
                <input
                    id='toggle'
                    name='toggle'
                    type='checkbox'
                    checked={props.darkState}
                    onClick={props.handleThemeChange}
                />
            </div>
        </label>
    );
}
