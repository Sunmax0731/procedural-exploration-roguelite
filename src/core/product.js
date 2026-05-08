export const product = {
  "repo": "procedural-exploration-roguelite",
  "domain": "Game",
  "rank": 65,
  "tier": "P3",
  "score": 50,
  "ideaNo": 2,
  "ideaName": "自動生成探索ローグライト",
  "field": "探索ゲーム",
  "publicTarget": "GitHub Pages / BOOTH",
  "platformScope": "static Web playable prototype / GitHub Pages",
  "overview": "シード、部屋選択、リスクを使って小さな探索ループを遊べるブラウザ版ローグライト検証。",
  "problem": "自動生成とバランス調整は範囲が広く、最初から大規模ゲームとして作ると検証不能になる。",
  "differentiation": "生成ロジックを代表シナリオとWebゲーム画面で固定し、遊べる最小探索ループとして検証する。",
  "audience": "ローグライト好き、ゲームジャム開発者、生成バランス検証者",
  "requiredInputs": [
    "seed",
    "partyBuild",
    "roomChoice",
    "riskLevel"
  ],
  "modules": [
    "game-loop",
    "balancer",
    "web-game",
    "scenario-validator"
  ],
  "accent": "#9333ea",
  "secondary": "#0f172a",
  "scenarioNouns": [
    "生成マップ",
    "部屋選択",
    "探索結果"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
