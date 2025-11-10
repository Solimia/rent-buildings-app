const theme = "theme";

export const themechanger =
{
    getTheme()
    {
        return localStorage.getItem(theme)
    },
    setTheme(themes)
    {
        localStorage.setItem(theme,themes)
    }
}