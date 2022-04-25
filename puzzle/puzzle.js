window.onload = function() {
    var blocks = document.getElementsByClassName('block');
    for (var i = 0; i < 16; i++) {
        blocks[i].addEventListener('click', moveBlock.bind(this, i));
        blocks[i].addEventListener('mouseover', scaleBlock.bind(this, i));
        blocks[i].addEventListener('mouseout', unScaleBlock.bind(this, i));
    }

    var startButton = document.getElementsByClassName('restart')[0];
    startButton.addEventListener('click', this.gameStart);
    var orderButton = document.getElementsByClassName('order')[0];
    orderButton.addEventListener('click', this.displayOrder);
    var changeButton = document.getElementsByClassName('change')[0];
    changeButton.addEventListener('click', this.changeImg);

     // 这里使用了微信自带的WeixinJSBridgeReady事件
     document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('music').play()
    })
    document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('music2').play()
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

var _void = 15;
var blocks = document.getElementsByClassName('block');
var positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; /* 块当前的位置状态 */
var victory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; /* 初始位置 */
var isStart = false;
var imgNum = 0;

function moveBlock(i) {
    if (isStart == false) { /* 未开始 */
        return;
    }
    if (i == positions[_void]) { /* 空格 */
        return;
    } else if (i == positions[_void + 1] || i == positions[_void - 1] || i == positions[_void - 4] || i == positions[_void + 4]) { /* 空格周围四格 */
        switch (i) {
            case positions[_void + 1]:
                //console.log(i + ' move to left');
                moveBlockLeft(i);
                break;
            case positions[_void - 1]:
                //console.log(i + ' move to right');
                moveBlockRight(i);
                break;
            case positions[_void + 4]:
                //console.log(i + ' move to up');
                moveBlockUp(i);
                break;
            case positions[_void - 4]:
                //console.log(i + ' move to down');
                moveBlockDown(i);
                break;
        }
        var iInHere = findLocation(positions, i);
        //console.log('pos[_void] = ' + positions[_void]);
        //console.log('pos[iInHere] = ' + positions[iInHere]);
        var temp = positions[_void];
        positions[_void] = positions[iInHere];
        positions[iInHere] = temp;
        _void = findLocation(positions, 15);
        //console.log('positions = ' + positions);
        ifWin();
        //console.log('_void = ' + _void);    
    } else {
        return;
    }
}

function moveBlockLeft(i) {
    blocks[i].style.transform += "translate(-82px,0px)";
}

function moveBlockRight(i) {
    blocks[i].style.transform += "translate(82px,0px)";
}

function moveBlockUp(i) {
    blocks[i].style.transform += "translate(0px,-82px)";
}

function moveBlockDown(i) {
    blocks[i].style.transform += "translate(0px,82px)";
}

function scaleBlock(i) {
    /* blocks[i].style.transform += "scale(1.02)"; */
    blocks[i].style.opacity = 0.6;
}

function unScaleBlock(i) {
    /* var temp = blocks[i].style.transform
    var temp2 = temp.split("scale(1.02)");
    var newTemp = temp2.join("");
    blocks[i].style.transform = newTemp; */
    blocks[i].style.opacity = 1;
}

function findLocation(pos, num) {
    var i = pos.length;
    while (i--) {
        if (pos[i] === num) {
            return i;
        }
    }
    return -1
}

function ifWin() {
    if (isStart == true) {
        if (positions.toString() == victory.toString()) {
            alert('You Win!');
            isStart = false;
        }
    }
}

function gameStart() {
    isStart = true;
    //恢复到初始序列
    moveBlockToPosition(positions, victory);
    //随机打乱positions
    var newPositions = getArrRandomly(positions);
    //根据positions的值确定 x y
    moveBlockToPosition(victory, newPositions);
}

function displayOrder() {
    //console.log('display');
    for (var i = 0; i < 16; i++) {
        blocks[i].innerHTML = i + 1;
    }
    var orderButton = document.getElementsByClassName('order')[0];
    orderButton.removeEventListener('click', displayOrder);
    orderButton.addEventListener('click', notDisplayOrder);
}

function notDisplayOrder() {
    //console.log('donot display');
    for (var i = 0; i < 16; i++) {
        blocks[i].innerHTML = '';
    }
    var orderButton = document.getElementsByClassName('order')[0];
    orderButton.removeEventListener('click', notDisplayOrder);
    orderButton.addEventListener('click', displayOrder);
}

function changeImg() {
    imgNum++;
    var finalImg = document.getElementById('finalImg');
    switch (imgNum) {
        case 0:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/0.jpg)"
            finalImg.src = "res/0.jpg";
            break;
        case 1:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/1.jpg)"
            finalImg.src = "res/1.jpg";
            break;
        case 2:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/2.jpg)"
            finalImg.src = "res/2.jpg";
            break;
        case 3:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/3.jpg)"
            finalImg.src = "res/3.jpg";
            break;
        case 4:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/4.jpg)"
            finalImg.src = "res/4.jpg";
            break;
        case 5:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/5.jpg)"
            finalImg.src = "res/5.jpg";
            break;
        case 6:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/6.jpg)"
            finalImg.src = "res/6.jpg";
            break;
        case 7:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/7.jpg)"
            finalImg.src = "res/7.jpg";
            break;
        case 8:
            for (var i = 0; i < 15; i++)
                blocks[i].style.backgroundImage = "url(res/8.jpg)"
            finalImg.src = "res/8.jpg";
            imgNum = -1;
            break;
    }
}

function moveBlockToPosition(posBegin, posEnd) {
    for (var i = 0; i < 16; i++) {
        //新位置序列中第i位的数字在原序列中的位置
        var originLoc = findLocation(posBegin, posEnd[i]);
        //确定row 用来判断是否左移右移溢出
        var row = Math.floor(originLoc / 4 + 1);
        // i - originLoc 为需要位移的步数
        var y = Math.floor((i - originLoc) / 4);
        var x = Math.floor((i - originLoc) - 4 * y);

        /* 右移出游戏区域 */
        if (x + originLoc > 4 * row - 1) {
            y += 1;
            x -= 4;
        }
        /* 左移出游戏区域 */
        else if (originLoc + x < 4 * (row - 1)) {
            y -= 1;
            x += 4;
        }

        //console.log('i= ' + i + ' x= ' + x + ' y= ' + y);
        /* 对block按照 x y 进行位移 */
        if (y >= 0) {
            for (var j = 0; j < y; j++) {
                moveBlockDown(posEnd[i]);
                //console.log('down');
            }
        } else {
            for (var j = y; j < 0; j++) {
                moveBlockUp(posEnd[i]);
                //console.log('up');
            }
        }

        if (x >= 0) {
            for (var j = 0; j < x; j++) {
                moveBlockRight(posEnd[i]);
                //console.log('right');
            }
        } else {
            for (var j = x; j < 0; j++) {
                moveBlockLeft(posEnd[i]);
                //console.log('left');
            }
        }
    }
    _void = findLocation(posEnd, 15);
}
//生成可还原序列
function getArrRandomly(arr) {
    var solve = solvability(victory);
    var RandomArr;
    var judge;
    while (1) {
        RandomArr = getRandomArr(arr);
        judge = solvability(RandomArr);
        if (judge == solve)
            break;
    }
    return RandomArr;
}
//随机轮换打乱
function getRandomArr(posArr) {
    var len = posArr.length;
    var a = 0;
    var b = 0;
    var c = 0;
    for (var i = 0; i < 25; i++) {
        var randomIndex = Math.floor(Math.random() * (len));
        a = randomIndex;
        if (randomIndex >= 14) {
            switch (randomIndex) {
                case 14:
                    b = a + 1;
                    c = 0;
                    break;
                case 15:
                    b = 0;
                    c = 1;
                    break;
            }
        } else {
            b = a + 1;
            c = a + 2;
        }
        //console.log('a= '+ a + ' b= ' + b + ' c= ' + c) ;
        var temp = posArr[a];
        posArr[a] = posArr[b];
        posArr[b] = posArr[c];
        posArr[c] = temp;
        //console.log('posArr= ' + posArr);
    }
    //console.log('done');
    return posArr;
}
//生成可还原判断数
function solvability(order) {
    var a;
    var count = 0;
    var m = 0;
    var n = 0;

    var len = order.length;
    var size = 4;
    //[0,1,2,3,4,5,7,6,8]
    for (var i = 0; i < len; i++) {
        a = order[i];
        if (a == size * size - 1) {
            m = parseInt(i / size);
            n = parseInt(i % size);
        }
        for (var j = i + 1; j < len; j++) {
            if (order[j] < a) {
                count++;
            }
        }
    }
    count += m;
    count += n;
    return count % 2 == 0;
}