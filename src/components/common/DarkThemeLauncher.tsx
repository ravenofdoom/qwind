export const DarkThemeLauncher = () => (
  <script dangerouslySetInnerHTML={`if(localStorage.theme==="dark"){document.documentElement.classList.add("dark");}else if(typeof localStorage.theme==="undefined"){if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark");}}`} />
);
