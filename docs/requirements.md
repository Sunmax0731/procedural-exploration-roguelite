# 要件定義

対象: 自動生成探索ローグライト (Rank 65, Game No.2)

## 目的

毎回違うダンジョン、カード効果、暗記問題を短時間で回す。

## 課題

同じ面を遊ぶだけでは継続動機が弱い。

## 要件

- 必須入力 `seed`、`playerAction`、`roomState`、`resourceState` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

静的Webまたはローカルサーバーで確認できる browser game として、非blank表示、主要要素、主要操作を検証します。
