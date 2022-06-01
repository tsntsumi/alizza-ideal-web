# Alizza Ideal web: Blog and Product site

Alizza Ideal web は、ちょっと個性的な会社紹介サイトです。
個人事業主や小規模事業者の事業や、商品を紹介するのに適しています。
ブログや商品説明ページ、その他プライバシーポリシーページなどを
公開することができます。

### 構成方法

ほとんどの機能を編集することができます。
最初にカスタマイズするときは、 `config.ts` を編集してください。

以下に説明していきます。

注意：どのプロパティも削除しないでください。

```javascript
const siteMetadata = {
```

Webページのタイトル

```javascript
    title: `Alizza Ideal`,
```

サイトのURL。ページのアイコンをクリックしたときに、
ホームへ移動するために使います。

```javascript
    siteUrl: `http://localhost`, // You sites URL
```

ホームページのタイトルが半角英字の場合に、
大文字に変換して表示するかどうか。
`true` で大文字にします。

```javascript
    capitalizeTitleOnHome: true, // Whether to capitalize the letter on homepage
```

ロゴ画像ファイル

```javascript
    logo: `/images/logo.png`, // Logo 
```

アイコン（ファビコン）：ブラウザのタブに表示するアイコン画像ファイルです。

```javascript
    icon: `/images/icon.png`, // Favicon, shown in the browsers "tab"
```

メインタイトルいっぱいに表示するタイトル画像ファイルです。

```javascript
    titleImage: `/images/wall.jpg`, // The main title is filled with an image.
```

SNSメディアにシェアされたときに表示する画像ファイルです。

```javascript
    ogImage: `/images/wall.png`, // open graph image (shown when link is shared in social media)
```

`true` を指定したときに、画面の表示内容を２カラム表示にします。
上で指定したタイトル画像ファイルを左に、テキストを右に表示します。

`false` にすると、タイトル画像はテキストの背景画像として表示されます。

```javascript
    twoColumnWall: true, // If true, the wall will be split into two with titleImage on left side and text on the right. If false, the title image will be used as the background of the text.
```

Webページの短い説明文。

```javascript
    about:"", // The short about text shown on front page
```

タイトルの下に表示する短いキャッチコピー

```javascript
    introTag: `PHOTOGRAPHER | VIDEOGRAPHER`, // Intro tag shown below title
```

タイトルの下に表示するWebページの概要説明

```javascript
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
```

Webページの製作者

```javascript
    author: `@tsntsumi`, // Author
```

Blog の一覧を最大何項目表示するか

```javascript
    blogItemsPerPage: 10,
```

製品紹介の一覧を最大何項目表示するか

```javascript
    productsItemsPerPage: 10,
```

ダークモードをデフォルトにするかどうか

```javascript
    darkmode: true, // Whether to enable the darkmode by default. Change to false if you want the light mode
```

ダークモードとライトモードを切替可能にするかいなか

```javascript
    switchTheme: true, // Whether to show a switch theme button on the navbar
```

ナビゲーションバーとフッター領域に表示するリンク。
以下の項目の数は増やしたり減らしたりしても構いません。

```javascript
    // The links shown on the navbar and footer, follow the same structure to add or remove more items.
```
```javascript
    navLinks: [{
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PRODUCTS",
            url: "/products"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
```

上のナビゲーションバーリンクと同様ですが、フッター領域にだけ表示します。

```javascript
    // Same as navbar links, except these are shown on the footer
    footerLinks: [{
        name: "PRIVACY POLICY",
        url: "/privacy-policy"
    }],
```

SNSのプロフィールリンク。
SNSのアイコン画像ファイルは、`static/images` フォルダに格納されています。
もしSNSの項目を増やす場合にアイコン画像を使う場合は、
`static/images` フォルダにコピーして使います。

```javascript
    // Your social profile links. The icons of the given social medias are available in the static folder. If you are adding a new item, include the icon in the static/images folder.
    social: [{
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#"
        }
    ],
```

コンタクト方法一覧

`api_url` には Airtable のテーブルIDを登録します。
コンタクトフォームを使わない場合は、値をから文字列にします。

必要ない項目は、削除せずに値を空文字列にしてください。

```javascript
    contact: {
        api_url: "https://getform.io/f/f227a36xxxxxx", // leave empty ('') or false to hide form
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    },
```

コメントを登録できるクラウドサービス「disqus」の ID を設定します。
使用しない場合は値をから文字列にしてください。

```javascript
    disqus: `your-disqus-shortname`  // Optional, remove this if you don't use disqus
}

```

#### ブログ記事を作る方法

フォルダ `contents/blog` を開きます。
次に、新しいフォルダを好きな名前で作ってください。
それが URL になります。
フォルダの中に、`index.md` ファイルとその他必要なファイルを格納してください。

MDX のメタデータ (frontmatter) は次のような構造をしています。

```
---
title: ブログ記事のタイトル
date: 2019-06-29 <-- 日付は左のフォーマットの通りに書いてください
image: ./image.jpg <-- 画像はブログ一覧画面で表示します
banner: ./banner.jpg <-- ブログ記事のトップに表示する画像
description: ここに書いた説明内容は、ブログ一覧ページに表示します。
  また SEO の説明にも使います。
---
```

ブログ記事を削除したくなったら、単に `contents/blog` の下にある
ベログのフォルダごと削除してください。
（注意： `blog` フォルダ自体は削除しないこと）

#### 製品紹介記事の作り方

`contents/products` フォルダを開きます。
次に、新しいフォルダを好きな名前で作ってください。
それが URL になります。
フォルダの中には `index.md` ファイルとその他必要なファイルを格納してください。

MDX のメタデータ（frontmatter）は次のような構造になります。

```
---
title: 記事のタイトル
date: 2019-06-29 <-- 日付は左のフォーマットの通りに書いてください
banner: ./banner.jpg <-- 紹介記事のトップに表示する画像
image: ./image.jpg <-- 画像は製品一覧画面で表示します
description: ここに書いた説明内容は、ブログ一覧ページに表示します。
  また SEO の説明にも使います。
---
```

製品紹介ページはグリッドの作成をサポートしています。

グリッドを作成する場合、次のような構造にします。

```
<Row>
<Col>

**Markdownで書いた説明文**

</Col>
</Row>
```

#### その他の説明ページを作る

その他の説明ページは、 `privacy-policy` のようなページを作るときに便利です。

例えば `About` ページはその他の説明ページとして作りました。

まず、　`contents/basepages` フォルダを開きます。
次に、新しいフォルダを好きな名前で作ってください。
それが URL になります。
フォルダの中には `index.md` ファイルとその他必要なファイルを格納してください。

MDX のメタデータ（frontmatter）は次のような構造になります。

```
---
title: 説明ページのタイトル
image: ./image.jpg <-- シェアするときに使います
description: ページの SEO メタデータに使う説明文
---
```

### コンタクトフォーム

コンタクトフォームは Airtable をバックエンドストレージとして使います。

コンタクトフォームに入力された内容は、 Airtable サーバーに送信する前に
内容がただしいかどうかチェックします。

