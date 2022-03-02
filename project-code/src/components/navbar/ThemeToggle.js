import React, { useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './ThemeToggle.css';

export default function ThemeToggle(props) {

    useEffect(() => {
        updateTheme(props.darkState);
    }, [props.darkState]);

    const updateTheme = (isDarkEnabled) => {
        const styles = getComputedStyle(document.body);

        const black = styles.getPropertyValue('--black');
        const white = styles.getPropertyValue('--white');

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