function handler(event) {
  // Enterキーが押されたかどうかをチェック
  if (event.key !== "Enter") {
    return;
  }
  
  // WindowsではShift + Enter、MacではCmd + Enter (metaKey) をチェック
  const isWindows = navigator.platform.indexOf('Win') > -1;
  const POST_KEY = isWindows ? "shiftKey" : "metaKey"; // ここでPOST_KEYを定義

  // 修正キーが押されていない場合は、何もしない
  if (!event[POST_KEY]) {
    return;
  }

  // 以下、コードの残りの部分...
}