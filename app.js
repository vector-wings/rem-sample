require('./index.scss');

// 获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取html的dom
let htmlDom = document.getElementsByTagName('html')[0];

// 设置html的font-size
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

let headerItems = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
headerItems[1].className = 'header-item-hover';


for(let i = 0; i < 6; i++) {
    headerItems[i].onmouseover = function() {
        headerItems[i].className = 'header-item-hover';
        for(let j = 0; j < 6; j++) {
            if (i !== j) {
                headerItems[j].className = 'header-item';
            }
        }
    }

    headerItems[i].onmouseout = function() {
        headerItems[i].className = 'header-item';
    }
}




window.addEventListener('resize', (e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});