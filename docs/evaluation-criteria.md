# 評価基準

対象: 自動生成探索ローグライト (Rank 65, Game No.2)

## 方針

静的Webまたはローカルサーバーで確認できる browser game として、非blank表示、主要要素、主要操作を検証します。

## 根拠

- NON PICKUP 優先表 Rank 65
- Source ZIP metadata: 自動生成探索ローグライト
- ドメインDesign / Architecture / AGENTS / SKILL

## 実行


作業ディレクトリ: `D:\AI\Game\procedural-exploration-roguelite`

```powershell
npm test
npm run cli
```


QCDS は Quality、Cost、Delivery、Satisfaction と定義し、S+ / S- / A+ / A- / B+ / B- / C+ / C- / D+ / D- の10段階で評価します。手動テストはCodex側では未実施のため、S+は付けません。

## 次アクション

ユーザー手動テスト後、結果をrelease evidenceとpost-MVP roadmapへ反映します。
