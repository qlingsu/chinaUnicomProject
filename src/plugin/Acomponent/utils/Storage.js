//localstorage的使用
let storage = {
    save: function (key, value) {
        console.info("localstorage save");
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function (key) {
        console.info("localstorage remove");
        localStorage.removeItem(key);
    },
    get: function (key) {
        console.info("localstorage get", key);
        return JSON.parse(localStorage.getItem(key));
    },
    update: function (key, value) {
        console.info("localstorage update");
        localStorage.setItem(key, JSON.stringify(value));
    },
    clear: function () {
        console.info("localstorage clear");
        localStorage.clear();
    }

}

export { storage }

const localStorageInstance = {
    install: function (Vue) {
        Vue && (Vue.prototype.$localstorage = storage);
    }
};

export default localStorageInstance;