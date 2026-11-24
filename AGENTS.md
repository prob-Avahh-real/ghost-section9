# SECTION 9 · GHOST DIVE

攻壳机动队主题的赛博空间潜入闯关。扮演公安九课特工，潜入敌方网络提取幽灵碎片，躲避 ICE，使用光学迷彩。

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| 🍎 iOS | Capacitor → Xcode | IPA |
| 🤖 Android | Capacitor → Gradle | APK |
| ⌚ 手表 | 触屏 + 窄屏 CSS | 同 APK |
| 👓 智能眼镜 | 窄 FOV + 语音（上/下/左/右/潜/隐） | 同 APK |
| 💍 智能戒指 | DeviceOrientation：倾斜移动，大幅晃动 = HACK | 同 APK |
| 🦯 智能手杖 | DeviceMotion：轻甩移动，重敲 = HACK | 同 APK |

## 玩法

- 点击 / 滑动 / 方向键在网络网格中移动
- 收集全部幽灵碎片后到达 EXIT 撤离
- 红色屏障需邻接后按 DIVE/HACK 破解
- ICE 巡逻接触扣同步率，归零 = 脑死
- THERMOPTIC：短暂光学迷彩，免疫 ICE
- 三关：港湾节点 → 人形公司 → 傀儡师

## 技术栈

- 单文件 Canvas 2D + HUD
- Capacitor 原生包装（Android / iOS）
- DeviceOrientation / DeviceMotion / SpeechRecognition

## 构建

```bash
./build.sh
# 或
npm install && node scripts/build-web.js && npx cap sync
cd android && ./gradlew assembleDebug
```

HTML 改动后需同步到 `www/index.html` 与 `android/app/src/main/assets/public/index.html`。

## Harness / Loop（助手）

- 遵循根 `/Users/skat/AGENTS.md`：**Harness Engineering** + **Loop Engineering**
- Guide = 本文件；Sensor = 下方验证命令；同类失误第二次须沉淀规则或测试（棘轮）
- 开干前写清 **Done**；每切片过验证环；显式停止（成功 / 上限 / 无进展 / 人审）
- 详解：`docs/HARNESS_ENGINEERING.md`、`docs/LOOP_ENGINEERING.md`

## 验证环 / Done

```bash
npm install
npm test          # 若有
npm run build     # 或 build:web
npx cap sync android   # 若有 android/
# 可选：JAVA_HOME=…/openjdk@17 npm run apk:debug
```

**Done 示例**：测试通过（若有）+ web 产物进 `www/`/`dist/` + `cap sync` 无报错。可选穿戴未做可搁置，不纳入强制 Done。
