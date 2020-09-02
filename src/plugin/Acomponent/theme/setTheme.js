// import blue from './blue.useable.scss';
// import red from './red.useable.scss';

const cache = {};
const themeAction = {
    blue() {
        if (!cache.blue) {
            cache.blue = import("./blue.useable.scss");
        }
        return cache.blue;
    },
    red() {
        if (!cache.red) {
            cache.red = import("./red.useable.scss");
        }
        return cache.red;
    }
};

let current = null;

async function setTheme(theme) {
    console.log("setTheme", themeAction[theme]);
    if (themeAction[theme]) {
        const style = await themeAction[theme]();
        if (current) {
            current.unref();
        }
        style.ref();
        current = style;
    }
}
window.setTheme = setTheme;
export default setTheme;