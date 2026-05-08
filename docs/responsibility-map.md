# 責務分割

- game-loop: 自動生成探索ローグライト の closed alpha 検証責務。
- balancer: 自動生成探索ローグライト の closed alpha 検証責務。
- web-game: 自動生成探索ローグライト の closed alpha 検証責務。
- scenario-validator: 自動生成探索ローグライト の closed alpha 検証責務。

共通: `src/core` が評価ロジック、`src/validators` が代表シナリオ検証、`src/report` が証跡生成、`src/web` がブラウザ表示を担当する。
