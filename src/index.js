"use strict";
/**
 * @author lilinjie
 * @description vue-resize-package
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ResizeObserver
// 用于监听元素的大小变化
function useResize(el, callback) {
    let resize = new ResizeObserver((entries) => {
        callback(entries[0].contentRect);
    });
    resize.observe(el);
}
// binding为 v-resize="handleResize" 的 handleResize 函数
// handleResize为回调函数
const install = (app) => {
    app.directive('resize', {
        // 指令的绑定函数
        mounted(el, binding) {
            // 调用useResize函数
            useResize(el, binding.value);
        }
    });
};
// 导出install方法
useResize.install = install;
console.log(useResize);
exports.default = useResize;
