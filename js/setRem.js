// 动态获取当前屏幕宽度 根据屏幕宽度实时设置1rem的大小
// window.onresize
function setRem() {
    // 获取屏幕的宽度
    var w = window.innerWidth;
    if (w > 640) {
        w = 640
    }
    // 设置rem的值
    //  document.documentElement ==>html
    document.documentElement.style.fontSize = w / 20 + 'px';
}
window.onresize = setRem;
window.onload=setRem;