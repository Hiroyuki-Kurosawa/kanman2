'use strict'

{
  (function(){

    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

  })()

  var big = document.getElementById('big');
  var small = document.getElementById('small');
  var initial = document.getElementById('initial');

  var targetImg = document.getElementById('charcterImage') 
  var targetWidth = targetImg.width;
  var targetHeight = targetImg.height;


  function resize() {
 
    targetHeight = targetHeight * (targetImg.width / targetWidth);
  }
  initial.addEventListener('click', () =>{
    targetImg.width = 329;
 
    resize();
  });

  big.addEventListener('click', () =>{

    targetImg.width += 50;
    console.log(targetWidth );
    resize();
  });
  small.addEventListener('click', () =>{
    targetImg.width -= 50;
    resize();
  });



  var bigF = document.getElementById('bigF');
  var smallF = document.getElementById('smallF');
  var initialF = document.getElementById('initialF');

  var targetImgF = document.getElementById('fukidasiImageF') 
  var targetWidthF = targetImgF.width;
  var targetHeightF = targetImgF.height;


  function resize2() {
 
    targetHeightF = targetHeightF * (targetImgF.width / targetWidthF);
  }
  initialF.addEventListener('click', () =>{
    targetImgF.style.width = "300px";
 
    resize2();
  });

  bigF.addEventListener('click', () =>{
    targetWidthF += 20;
    targetImgF.style.width = targetWidthF + "px";
    console.log(targetWidthF );
    resize2();
  });
  smallF.addEventListener('click', () =>{
    targetWidthF -= 20;
    targetImgF.style.width = targetWidthF + "px";
    resize2();
  });

  ;

  document.addEventListener('DOMContentLoaded', function(){
    var obj = document.getElementsByClassName('badge-primary')[0];
    const copyobj = "初期テキスト";
    obj.textContent = copyobj;
  });
  window.onload = function () {
 
    // textarea要素を取得
    var hoge = document.getElementById("textarea");
    // 表示用
    var obj = document.getElementsByClassName('badge-primary')[0];

    

   
    // 入力時に発生
    hoge.addEventListener('input', (event) => {
      //　入力された値を表示
      obj.textContent = hoge.value;
    });
    // フォーカスが外れた時に発生
    // hoge.addEventListener('change', (event) => {
    //   // クリア
    //   hoge.value = '';
    //   obj.textContent = '';
    // });
 
  }
  let hitokomaFontLarge = document.getElementById('hitokomaFontLarge');
  let hitokomaFontSmall = document.getElementById('hitokomaFontSmall');
  
  let hitokomaFontSize = 100;

  hitokomaFontLarge.addEventListener('click', () => {
    hitokomaFontSize *= 1.2; document.getElementById('hitokomaFontResizable').style.fontSize = hitokomaFontSize + '%';
    console.log(hitokomaFontSize);
  });
  hitokomaFontSmall.addEventListener('click', () => {
    hitokomaFontSize /= 1.2; document.getElementById('hitokomaFontResizable').style.fontSize = hitokomaFontSize + '%';
  });
}