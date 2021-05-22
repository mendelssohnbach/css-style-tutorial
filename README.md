# CSSスタイルを設定する

## HTMLファイルで読み込んだCSSファイルを参照する

- コンポーネントからスタイル定義が分離してしまう
- グローバルな名前空間でスタイル定義となる

## インラインスタイル

- スタイル定義をコンポーネント内で完結できる
- スタイル定義のために `React.CSSProperties` 型のオブジェクトを作成できる

- スタイル定義が複数の変数に散らばる
- パフォーマンスの低下する
- 常にセキュリティの懸念がある

## CSS Modules

- webbapkcの定義が面倒
- CSS型定義が面倒

原因不明のエラー発生!

'Cannot find module './hello.css' or its corresponding type declarations. TS2307'
