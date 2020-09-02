import "./iconfont/iconfont.css";
import './theme/blue.useable.scss';
const Acomponent = {};
Acomponent.install = function (Vue, options) {

    console.log("", options)
    if (options && options.theme) {

    }
    //基础组件
    var getBaseComponents = require.context("./base/", true, /\.vue$/);
    getBaseComponents.keys().forEach((path) => {
        let component = getBaseComponents(path).default;
        Vue.component(component.name, component);
    })
    //功能扩展组件和组合组件
    var getExtendsComponents = require.context("./extends/", true, /\.vue$/);
    getExtendsComponents.keys().forEach((path) => {
        let component = getExtendsComponents(path).default;
        Vue.component(component.name, component);
    })


    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    const Confirm = require("./base/Confirm").default;
    const ConfirmBox = Vue.extend(Confirm);
    // const options = {}
    const ConfirmConstructor = (title, content, options) => {

        options = Object.assign({
            title: title,
            ...content,
        }, options);

        let instance = new ConfirmBox({
            data: options
        }).$mount();

        document.body.appendChild(instance.$el);

        return instance.show(options);
    };
    // 添加实例方法
    Vue.prototype.$confirm = ConfirmConstructor;//Confirm组件
    //全局方法，可以在控制台调用
    window.$confirm = Vue.prototype.$confirm

    const Message = require("./base/Message").default;
    const MessageBox = Vue.extend(Message);
    Message.install = (text, options) => {

        options = Object.assign({
            text: text,
        }, options);

        let instance = new MessageBox({
            data: options
        }).$mount();

        document.body.appendChild(instance.$el);

        return instance.show(options);
    };
    // 添加实例方法
    Vue.prototype.$message = Message.install;//Message
    //全局方法，可以在控制台调用
    window.$message = Vue.prototype.$message
}
export default Acomponent;