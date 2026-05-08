export const product = {
  "repo": "procedural-exploration-roguelite",
  "domain": "Game",
  "rank": 65,
  "tier": "P3",
  "score": 50,
  "ideaNo": 2,
  "ideaName": "自動生成探索ローグライト",
  "field": "ゲーム・インタラクション",
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "毎回違うダンジョン、カード効果、暗記問題を短時間で回す。",
  "problem": "同じ面を遊ぶだけでは継続動機が弱い。",
  "differentiation": "生成ルールと学習要素を軽く差し替えられる構造にする。",
  "audience": "短時間で繰り返し探索したいブラウザゲーム利用者",
  "requiredInputs": [
    "seed",
    "playerAction",
    "roomState",
    "resourceState"
  ],
  "modules": [
    "game-loop",
    "balancer",
    "web-game",
    "scenario-validator"
  ],
  "accent": "#3157a4",
  "secondary": "#eab308",
  "scenarioNouns": [
    "生成部屋",
    "カード効果",
    "脱出判断"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
