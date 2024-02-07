// 投稿キー設定: 何キー + Enter の同時押しで投稿するか
// shiftKey | ctrlKey | altKey
const POST_KEY = "shiftKey";

window.addEventListener("keydown", handler, true);

function handler(event) {
  if (event.key !== "Enter") {
    // Enterキー以外は何もしない
    return;
  }
  if (event.isModified) {
    // 無限ループ防止
    return;
  }

  if (event[POST_KEY]) {
    // 投稿キー + Enter の場合
    // Enter 単体イベントを発火させて投稿を実行
    const properties = [];
    for (const key in event) {
      properties[key] = event[key];
    }
    properties.shiftKey = false;
    const modifiedEvent = new KeyboardEvent("keydown", properties);
    modifiedEvent.isModified = true;
    event.target.dispatchEvent(modifiedEvent);
  } else {
    // Enter 単体の場合
    // 改行実行
    document.execCommand("insertLineBreak");
  }

  // デフォルトの動作を抑止
  event.preventDefault();
  event.stopImmediatePropagation();
}