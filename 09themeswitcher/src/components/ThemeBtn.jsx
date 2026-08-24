import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur transition hover:border-amber-400 dark:border-slate-700 dark:bg-slate-900/80" title="Toggle light and dark theme">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="relative h-6 w-11 rounded-full bg-slate-300 transition peer-focus:ring-4 peer-focus:ring-amber-300 dark:bg-slate-700 dark:peer-focus:ring-amber-800 peer-checked:bg-amber-500 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"></div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{themeMode === 'dark' ? 'Dark' : 'Light'}</span>
        </label>
    );
}