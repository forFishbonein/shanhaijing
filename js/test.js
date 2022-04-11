//执行初始函数
init();

function init() {
    //创建一个碎片容器
    var frag = document.createDocumentFragment();
    document.body.style.margin = "0px";
    //创建左侧图片容器
    var ul = createE("ul", {
            width: "260px",
            height: "400px",
            backgroundImage: "url(../imags/background/b1.png)",
            borderRight: "1px solid #000",
            borderBottom: "1px solid #000",
            listStyle: "none",
            padding: "0px",
            margin: "0px",
            opacity: ".3",
            position: "absolute"
        })
        //创建li,显示图片中的边框
    var li = createE("li", {
            width: "51px",
            height: "79px",
            borderLeft: "1px solid #000",
            borderTop: "1px solid #000",
            padding: "0px",
            margin: "0px",
            float: "left"
        })
        //循环，将li复制插入到ul中
    for (i = 0; i < 25; i++) {
        ul.appendChild(li.cloneNode(false));
    }
    //将ul插入到碎片容器中
    frag.appendChild(ul);
    //创建右侧图片容器,因为img要相对body定位，所以它的父容器不能有定位属性
    var div = createE("div", {
            width: "302px",
            height: "302px",
            border: "1px solid #000",
            marginLeft: "400px"
        })
        //创建图片标签
    for (var j = 0; j < 5; j++) {
        for (var k = 0; k < 5; k++) {
            var img = createE("img", {
                width: "52px",
                height: "80px",
                position: "absolute",
                left: Math.floor(Math.random() * 250) + 400 + "px",
                top: Math.floor(Math.random() * 220) + "px"
            })
            img.src = "./img/img" + j + "-" + k + ".jpg";
            //图片侦听mouseHandler事件
            img.addEventListener("mousedown", mouseHandler);
            div.appendChild(img);
        }
    }
    //将div插入到碎片容器中，再将frag插入到body中
    frag.appendChild(div);
    document.body.appendChild(frag);
}
//鼠标事件
function mouseHandler(e) {
    switch (e.type) {
        case "mousedown":
            //清除点击后移动图片的默认效果
            e.preventDefault();
            console.log(this.src.match(/img\/img(.*)\.jpg/))
                //获取到图片路径中的数字，计算图片正确的位置坐标
            var imgSrc = this.src.match(/img\/img(.*)\.jpg/)[1].split("-");
            var rightL = imgSrc[1] * 52;
            var rightTop = imgSrc[0] * 80;
            //如果图片正确放入，直接跳出
            if (this.style.left === rightL + "px" && this.style.top === rightTop + "px") return;
            //将当前图片的z-index设为最大
            this.style.zIndex = "999";
            //将e.offsetX、e.offsetY、当前点击图片对象存入到document中
            document.x = e.offsetX;
            document.y = e.offsetY;
            document.elem = this;
            document.rightL = rightL;
            document.rightTop = rightTop;
            //document侦听mousemove事件和mouseup事件
            document.addEventListener("mousemove", mouseHandler);
            document.addEventListener("mouseup", mouseHandler);
            break;
        case "mousemove":
            //自动吸附的距离大小
            var gap = 20;
            //设置当前的图片跟着鼠标移动而移动
            let x = e.clientX - this.x;
            let y = e.clientY - this.y;
            this.elem.style.left = x + "px";
            this.elem.style.top = y + "px";
            //如果当前图片的位置坐标在一定范围内，则让它自动吸附
            if (x >= this.rightL - gap && x <= this.rightL + gap &&
                y >= this.rightTop - gap && y <= this.rightTop + gap) {
                this.elem.style.left = this.rightL + "px";
                this.elem.style.top = this.rightTop + "px";
            }
            break;
        case "mouseup":
            //鼠标松开的时候，将当前图片的z-index改小
            this.elem.style.zIndex = "10";
            //鼠标松开后，移除document的mousemove和mouseup事件,清空数据，防止内容泄露
            this.removeEventListener("mousemove", mouseHandler);
            this.removeEventListener("mouseup", mouseHandler);
            this.elem = null;
            break;
    }
}
//创建标签
function createE(elem, styleData) {
    var elem = document.createElement(elem);
    for (var prep in styleData) {
        elem.style[prep] = styleData[prep];
    }
    return elem;
}