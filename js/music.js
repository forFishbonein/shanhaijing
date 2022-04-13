window.onload = function() {
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

    // /*不允许有多个onload*/
    // /*控制选项卡切换*/
    // var myTab = document.getElementById("tab"); //整个div
    // var myUl = myTab.getElementsByTagName("ul")[0]; //一个节点
    // var myLi = myUl.getElementsByTagName("li"); //数组
    // var myDiv = myTab.getElementsByTagName("div"); //数组

    // for(var i = 0; i < myLi.length; i++) {
    //     myLi[i].index = i;
    //     myLi[i].onclick = function() {
    //         for(var j = 0; j < myLi.length; j++) {
    //             myLi[j].className = "off";
    //             myDiv[j].className = "hide";
    //         }
    //         this.className = "on";
    //         myDiv[this.index].className = "show";
    //     }
    // }
}