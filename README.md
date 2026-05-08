# 自動生成探索ローグライト

procedural-exploration-roguelite は、NON PICKUP 優先リスト Rank 65 / Game No.2 から昇格した closed alpha プロダクトです。毎回違うダンジョン、カード効果、暗記問題を短時間で回す。

## Quick Start

```powershell
cd D:\AI\Game\procedural-exploration-roguelite
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Pages / BOOTH
- 対象ユーザー: 短時間で繰り返し探索したいブラウザゲーム利用者
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/game`: game loop と balancing の境界

## Release Artifacts

- `dist/procedural-exploration-roguelite-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`
