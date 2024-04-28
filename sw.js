const APP_NAME = "mini-pwa";
const VERSION = "202404282040JST";

// このサービスワーカーのキャッシュデータであることを示すキーとなる文字列
// バージョン番号を入れることで、ソースがアップデートされたときに
// キャッシュファイルの更新をする狙い
const CACHE_NAME = APP_NAME + "_" + VERSION;

// 静的ファイルの相対パスを指定し、インストール時にダウンロードしてキャッシュしておくファイル群
// jsファイルやcssファイル、画像ファイルなどがあればそれもリストアップしておくと良い
// ここで言う"/"はサービスワーカーとなるJavaScriptファイルがあるディレクトリを指す
const assets = [
  "/",
  "/index.html",
  "/icon256x256.png",
];

/**
 * サービスワーカーのインストールイベント発生時の処理
 */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 配列で指定したファイル群をダウンロードしてローカルにキャッシュしておく
      // これによりオフラインでも起動できるようになる
      return cache.addAll(assets);
    })
  );
});

/** 
 * サービスワーカーからダウンロードするときの処理
 */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // キャッシュされているときは通信せずにローカルのファイルを利用する
      return response ? response : fetch(e.request);
    })
  );
});

/**
 * サービスワーカーが起動するときの処理
 */
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // もしこのファイルの先頭で定義されておらず、使われないファイルが
          // キャッシュされていたらキャッシュ（＝ローカル）から削除しておく
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});