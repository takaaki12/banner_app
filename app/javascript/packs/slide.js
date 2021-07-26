// 画像（パス）を登録する
let img = document.getElementById("slide_image_place");
// ここではimagesフォルダ内をDBと考える
const banners = [
  '/assets/kosui.jpg',
  '/assets/URBAN RESEARCH MEDIA.jpg',
  '/assets/タオル専門店「伊織」.png',
  '/assets/黒川温泉の旅館_深山山荘.png',
];

let num = 0;

document.addEventListener('DOMContentLoaded', function BannerSlide() {
  // bannerにbanners配列のn番目の要素を格納
  banner = banners[num];
  // バナーを表示
  img.src = banner;

//   表示する配列要素をループさせる
  if (num < banners.length - 1 ) {
    // 配列の最後の要素以外の場合は、次の要素番号にする
    num++;
  } else {
    // 配列の最後の要素まで表示したら、配列の最初に戻る
    num = 0
  }

  // バナー表示を5秒ごとに切り替え
  timer = setTimeout(BannerSlide, 1000);
});

// ※スライドバナーはどの段階でループを止めればいいのか？

// HTML内に情報を埋め込む（※差し込みバナー機能）
let banner = document.getElementById('banner');
banner.innerHTML = "HELLO tin!"