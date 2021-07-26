// ⓵ポップアップバナー部のHTMLノードを作成
let PopUpBannerNode = '<div class="popup" id="js-popup"><div class="black-background" id="js-black-bg"><div class="popup-inner"><div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div><img id="pop_up_image_place" src=""></div></div></div></div>';
{/*上記のコード
<div class="popup" id="js-popup">
  <div class="popup-inner">
    <div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div>
    <img id="pop_up_image_place" src="">
  </div>
  <div class="black-background" id="js-black-bg"></div>
</div>
 */}
// 作成したノードを</body>直前に挿入
document.body.insertAdjacentHTML("beforeend", PopUpBannerNode);


// ⓶バナー画像サイズ、
let imageSize = '50%';

$("#pop_up_image_place").css( {
  'object-fit': 'contain',
  'height'    : imageSize, // 高さのみ指定で幅も比例してリサイズされる
});


// ⓷バナー位置の指定
px = false; // %指定ならfalse

if (px) {
  // バナー位置px指定の場合
  let marginTop = '50px';  //☆動的部分
  let marginLeft = '50px'; //☆動的部分

  $("#pop_up_image_place").css( {
    'margin-top' : marginTop,
    'margin-left' : marginLeft,
  });

} else {
  // バナー位置選択指定の場合(%)
  // 1⃣topLeft,    | 2⃣topCenter,    | 3⃣topRight
  // -----------------------------------------
  // 4⃣middleLeft, | 5⃣middleCenter, | 6⃣middleRight
  // -----------------------------------------
  // 7⃣bottomLeft, | 8⃣bottomCenter, | 9⃣bottomRight

  let setPosition = 'middleCenter'; // ☆動的部分（上記位置名をsetPositionに入力）

  if (setPosition == 'topLeft') {
    // 1⃣
    $(".popup_inner").css( {
      // 'transform': 'translate(-50%,-50%)',
      // 'top'      : '0%',
      // 'left'     : '0%',
    });
  } else if(setPosition == 'topCenter') {
    // 2⃣
    $(".popup_inner").css( {
      'transform': 'translate(-50%, 0%)',
      // 'top'      : '0%',
      'left'     : '50%',
    });
  } else if(setPosition == 'topRight') {
    // 3⃣
    $(".popup_inner").css( {
      'transform': 'translate(-100%, 0%)',
      // 'top'      : '0%',
      'left'     : '100%',
    });
  } else if(setPosition == 'middleLeft') {
    // 4⃣
    $(".popup_inner").css( {
      'transform': 'translate(0%, -50%)',
      'top'      : '50%',
      // 'left'     : '0%',
    });
  } else if(setPosition == 'middleCenter') {
    // 5⃣
    $(".popup_inner").css( {
      'transform': 'translate(-50%, -50%)',
      'top'      : '50%',
      'left'     : '50%',
    });
  } else if(setPosition == 'middleRight') {
    // 6⃣
    $(".popup_inner").css( {
      'transform': 'translate(-100%, -50%)',
      'top'      : '50%',
      'left'     : '100%',
    });
  } else if(setPosition == 'bottomLeft') {
    // 7⃣
    $(".popup_inner").css( {
      'transform': 'translate(0%,-100%)',
      'top'      : '100%',
      // 'left'     : '0%',
    });
  } else if(setPosition == 'bottomCenter') {
    // 8⃣
    $(".popup_inner").css( {
      'transform': 'translate(-50%, -100%)',
      'top'      : '100%',
      'left'     : '50%',
    });
    } else if(setPosition == 'bottomRight') {
    // 9⃣
    $(".popup_inner").css( {
      'transform': 'translate(-100%,-100%)',
      'top'      : '100%',
      'left'     : '100%',
    });
  }
}


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