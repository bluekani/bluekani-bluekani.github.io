document.addEventListener('DOMContentLoaded', function() {
    // 画像のリスト
    var images = [
        '../img/slider-bg1.jpg',
        '../img/slider-bg2.jpg',
        '../img/slider-bg3.jpg',
        '../img/slider-bg4.jpg',
        '../img/slider-bg5.jpg',
    ];

    // ランダムな画像を選択
    var randomImage = images[Math.floor(Math.random() * images.length)];

    // slider-contactの背景にランダムな画像を設定
    var sliderContact = document.getElementById('slider');
    sliderContact.style.background = 'url("' + randomImage + '") no-repeat';
    sliderContact.style.backgroundSize = 'cover';
});

