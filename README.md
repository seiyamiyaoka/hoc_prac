## reactのコンポーネントパターンおさらい

### 構成

```
tree ./ -L 2
./
├── App.css
├── App.js
├── App.test.js
├── components
│   ├── superHeroList.js ## child component
│   ├── superHeroListContainer.js ## parent component
│   └── superHeroRow.js ## child component parent is superHeroList
├── hocContainer
│   └── heroWithContainer.js ## hoc component wrapped component return new component
├── index.css
├── index.js
├── logo.svg
├── model
│   └── superHero.js ## use data
└── serviceWorker.js
```

### まとめ1

App.jsにSuperHeroListContainerがimportされています
SuperHeroListContainerにはFragmentで二つコンポーネントが囲まれている。

#### SuperHeroListの場合
listの中でhtmlが生成されています, propsで親コンポーネントからデータが渡されています。
親コンテナでデータが定義されているのでいるので子compnentは受け取るだけです
データの用意と描画する部分がうまく分かれていることがわかります。

#### WithHOCContainerの場合

componentを返す新しいcomponentを作成します。今回はsuperHeroを返していますが例えば同じ構造でevilHeroを返そうと思えば新しいcomponentでデータ取得を変えれば簡単に再利用ができます。作りは同じでデータやcssだけ付け替えたい時とか便利そう

参考
https://medium.freecodecamp.org/react-superpowers-container-pattern-20d664bdae65
