import ThemeContext from './ThemeContext';
import { useContext } from 'react';

const ClientThemeWraper = ({children}) => {
    const { theme } = useContext(ThemeContext)
        return (
        <div data-theme={theme}>
            {children}
        </div>
    );
};

export default ClientThemeWraper;