# sample_fe_vite

React(Vite)向け Frontend ソースのサンプルです

## サンプル起動方法

### 1.1 環境変数ファイルを作成する

.env.sample をコピーして、.env ファイルを作成し BACKEND の URL を記述する

### 1.2 PAT の登録

GitHub アカウントの Personal Access Token(Classic)を発行し、環境変数 GITHUB_TOKEN として登録する

### 1.3 依存ライブラリを取得する

```
npm install
```

### 1.4 npm で run する

```
npm run dev
```

## 2.組み込み方法

以下の手順に従って、組み込みを行ってください。

### 2.1 Raas 提供の SDK ライブラリを取得する

package.json の dependencies に以下を追加

```json
"@sutech-jp/raas-react-client": "0.1.20",
"@sutech-jp/datatraveler-react-client": "0.1.14"
```

npm もしくは yarn で install を実行

```bash
$ npm install
```

### 2.2 サンプルコードを参考に、各種コンポーネントを任意の Page に組み込む
