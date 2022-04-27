window.onload = function() {
    let audioPlay = document.getElementById('music');

    audioPlay.play();

    setTimeout(() => {
        audioPlay.pause();
        audioPlay.load();
    }, 10)

    // 这里使用了微信自带的WeixinJSBridgeReady事件
    document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('music').play();
    })
    document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('music2').play();
    })
    /*右上角音乐及图标*/
    var flag = 1; //开启音乐
    var music = document.getElementById('music');
    var rallback = document.getElementById('rallback');

    rallback.onclick = function() {
        if(flag == 1) {
            music.pause(); /*音乐关闭*/
            flag = 0;
            rallback.style.webkitAnimationPlayState = "paused"; //旋转动画暂停
        } else {
            music.play(); /*音乐开启*/
            flag = 1;
            rallback.style.webkitAnimationPlayState = "running"; //旋转动画暂停
        }
    }

    var flag2 = 1; //开启音乐
    var music2 = document.getElementById('music2');
    var rallback2 = document.getElementById('rallback2');

    rallback2.onclick = function() {
        if(flag2 == 1) {
            music2.pause(); /*音乐关闭*/
            flag2 = 0;
        } else {
            music2.play(); /*音乐开启*/
            flag2 = 1;
        }
    }
 }