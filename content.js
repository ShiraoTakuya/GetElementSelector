func();
async function func() {
  getElementSelector();
}
async function sleepMs(ms) {
  await new Promise((e) => {
    setTimeout(() => {
      e();
    }, ms);
  });
}

function getElementSelector() {
  document.addEventListener("contextmenu", function (event) {
    var clickedElement = event.target;
    var selector = "";
    while (clickedElement !== document.body) {
      var tagName = clickedElement.tagName.toLowerCase();
      var index =
        Array.from(clickedElement.parentNode.children).indexOf(clickedElement) +
        1;
      selector = ">" + tagName + ":nth-child(" + index + ")" + selector;
      clickedElement = clickedElement.parentNode;
    }
    console.log("body" + selector);

    var clickedElement = event.target;
    var selector = "";
    while (clickedElement !== document.body) {
      var tagName = clickedElement.tagName.toLowerCase();
      var index =
        Array.from(clickedElement.parentNode.children).indexOf(clickedElement) +
        1;
      selector = ">" + tagName + ":nth-child(" + index + ")" + selector;
      clickedElement = clickedElement.parentNode;

      if (clickedElement.classList.length > 0) {
        selector = "." + clickedElement.classList[0] + selector;
        break;
      }
    }
    console.log(selector);
  });

  // ページ内の全ての要素を取得
  var elements = document.querySelectorAll("*");

  // 各要素にマウスイベントリスナーを追加
  elements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      // ホバー時に要素を強調表示
      event.stopPropagation();
      element.classList.add("highlighted");
    });

    element.addEventListener("mouseout", function () {
      // ホバーが外れたときに強調表示を解除
      element.classList.remove("highlighted");
    });
  });
  // 新しいスタイルルールを作成
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".highlighted { background-color: yellow; }";

  // ページのヘッダにスタイルルールを追加
  document.head.appendChild(css);
}
