function onLoad() {
    // Add listeners for system color-change events.
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkTheme());
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightTheme());

    // Check local storage for explicit theme preference, else check system.
    if (localStorage.getItem("theme") === "dark") {
        activateDarkTheme();
    } else if (localStorage.getItem("theme") === "light") {
        activateLightTheme();
    } else {
        activateColorScheme();
    }
}

function activateTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme", theme);
}

function activateDarkTheme() {
    activateTheme("dark");
}

function activateLightTheme() {
    activateTheme("light");
}

function activateColorScheme() {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
    const isNotSupported = !isDarkTheme && !isLightTheme && !isNotSpecified;

    if (isDarkTheme) activateDarkTheme();
    if (isLightTheme) activateLightTheme();
    if (isNotSpecified) {
        console.log("Your browser doesn't have a color scheme preference. Defaulting to dark theme.");
        activateDarkTheme();
    }
    if (isNotSupported) {
        console.log("Your browser doesn't support the color scheme preference media query. Please update to a more recent browser. Defaulting to dark theme.");
        console.log("Or, hey, maybe you're using Tor or another privacy-aware browser. Keep doing that, then.");
        activateDarkTheme();
    }
}

function toggleTheme() {
    if (document.documentElement.getAttribute("theme") === "dark") {
        activateLightTheme();
    } else if (document.documentElement.getAttribute("theme") === "light") {
        activateDarkTheme();
    } else {
        console.log("Looks like something broke. Setting the theme to your browser's color scheme preference.");
        activateColorScheme();
    }
}

onLoad();
