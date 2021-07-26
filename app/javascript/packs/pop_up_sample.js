

このファイルは使わない。



// ⓵ポップアップバナー部のHTMLノードを作成
let PopUpBannerNode = '<div class="popup" id="js-popup"><div class="black-background" id="js-black-bg"><div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div><img id="pop_up_image_place" src=""></div></div></div>';
{/*上記のコード
<div class="popup" id="js-popup">
  <div class="popup-inner"> ※←ここは無くした
    <div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div>
    <img id="pop_up_image_place" src="">
  </div>
  <div class="black-background" id="js-black-bg"></div>
</div>
 */}
// 作成したノードを</body>直前に挿入
document.body.insertAdjacentHTML("beforeend", PopUpBannerNode);


// ⓶バナー画像サイズ、位置の指定
px = true; // %指定ならfalse

if (px) {
  // px指定だった場合
  let imageWidth = 250;
  let imageHeight = 250;
  let imageSizeHalfWidth = imageWidth / 2;
  let imageSizeHalfHeight = imageHeight / 2;
  let setPositionL = 150;
  let setPositionT = 150;

  // ⓶-1 ポップアップバナーの画像サイズCSS指定
  $("#pop_up_image_place").css( {
    'size'    : "50%",
    // 'height'   : "50%",
  });

  // ⓶-2 バナー画像位置CSS指定
  // ユーザーが設定したバナー位置が画像サイズの半分よりも小さい場合、はみ出してしまわないように条件分岐
  // 横方向
  if (setPositionL >= imageSizeHalfWidth) {
    // ポップアップバナーの位置調整
    $("#pop_up_image_place").css( {
      'left' : setPositionL,
    });
  } else {
    $("#pop_up_image_place").css( {
      'left' : imageSizeHalfHeight,
    });
  }

  // 縦方向
  if (setPositionT >= imageSizeHalfHeight) {
    $("#pop_up_image_place").css( {
      'top'    : setPositionT,
  });
  } else {
    $("#pop_up_image_place").css( {
      'top'    : imageSizeHalfWidth,
    });
  }

} else {
  // ％指定だった場合
  $("#pop_up_image_place").css( {
    'width' : imageWidth,
    'height': imageWidth,
    'top'   : setPositionL,
    'left'  : imageSizeHalfHeight,
  });
}

// ポップアップバナーの位置調整その他
$("#pop_up_image_place").css( {
  'position' : 'absolute',
  'transform': 'translate(-50%,-50%)',
  // 'top'      : '0%',
  // 'left'     : '0%',
});


// 画像（パス）を登録する
let image = document.getElementById("pop_up_image_place");
// ここでは/assets/imagesフォルダ内をDBと考える
const banner = ['/assets/黒川温泉の旅館_深山山荘.png'];

window.onload = function() {
  let popup = document.getElementById('js-popup');
  if(!popup) return;
  popup.classList.add('is-show');

  let blackBg = document.getElementById('js-black-bg');
  let closeBtn = document.getElementById('js-close-btn');
  image.src = banner;

  closePopUp(blackBg);
  closePopUp(closeBtn);

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.remove('is-show');
    })
  }
}