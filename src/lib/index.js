import test from "./test/index.vue";
import test2 from './test2/index.vue'

const components = [
  test,
  test2
]
const install = function(vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  /*eslint-disable*/
  components.map((component) => {
    vue.component(component.name, component);
  });
};

/* istanbul ignore if */ 
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 自动引入所有组件

// 如果加入的话就多一个default
export default {
  install,
  test,
  test2
}