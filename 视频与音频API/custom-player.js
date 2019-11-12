//创建变量保存引用

//vedio元素和控制栏
var media = document.querySelector('video');
var controls = document.querySelector('.controls');

//播放/暂停，停止，快退，和快进按钮
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var rwd = document.querySelector('.rwd');
var fwd = document.querySelector('.fwd');

//进度条外面的 <div>，数字计时器的 <span>，以及内部的 <div> 会随着视频播放逐渐变宽。
var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

//删除浏览器的默认部件，使得自定义组件可见
media.removeAttribute('controls');
controls.style.visibility = 'visible';

//单击播放按钮时调用 playPauseMedia()函数：
play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
    if (media.paused) {
        play.setAttribute('data-icon', 'u');
        media.play();
    } else {
        play.setAttribute('data-icon', 'P');
        media.pause();
    }
}

//视频暂停的方法
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon', 'P');
}


//探索快进和快退
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

var intervalFwd;
var intervalRwd;

function mediaBackward() {
    clearInterval(intervalFwd);
    fwd.classList.remove('active');

    if (rwd.classList.contains('active')) {
        rwd.classList.remove('active');
        clearInterval(intervalRwd);
        media.play();
    } else {
        rwd.classList.add('active');
        media.pause();
        intervalRwd = setInterval(windBackward, 200);
    }
}

function mediaForward() {
    clearInterval(intervalRwd);
    rwd.classList.remove('active');

    if (fwd.classList.contains('active')) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        media.play();
    } else {
        fwd.classList.add('active');
        media.pause();
        intervalFwd = setInterval(windForward, 200);
    }
}