window.onload = function() {
    /*右上角音乐及图标*/
    var flag = 1; //开启音乐
    var music2 = document.getElementById('music2');
    var rallback2 = document.getElementById('rallback2');

    rallback2.onclick = function() {
        if(flag == 1) {
            music2.pause(); /*音乐关闭*/
            flag = 0;
        } else {
            music2.play(); /*音乐开启*/
            flag = 1;
        }
    }
}