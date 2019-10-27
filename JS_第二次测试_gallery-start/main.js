const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */

for (var i = 1; i <= 5; i++) {
    // 显示一排小照片
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg')
    newImage.onclick = function(mouseEvent){
        // console.log(mouseEvent)
        // displayedImage.setAttribute("src", 'images/pic' + i + '.jpg');
        let newSrc = mouseEvent.target.getAttribute("src");
        displayedImage.setAttribute("src", newSrc);   
    }
    thumbBar.appendChild(newImage);
}

/* 编写 变亮/变暗 按钮 */

btn.onclick = function(){
    if(btn.getAttribute("class")==="dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "变亮";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "变暗";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
