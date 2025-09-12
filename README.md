# Local Command Panel

一个基于 Vue 3 + TypeScript + Vite + UnoCSS + Electron 的本地命令面板应用程序。

## 🚀 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - JavaScript 的超集，提供类型安全
- **Vite** - 下一代前端构建工具
- **UnoCSS** - 即时原子化 CSS 引擎
- **Electron** - 使用 Web 技术构建跨平台桌面应用
- **ESLint** - 代码质量和风格检查
- **PNPM** - 快速、节省磁盘空间的包管理器

## 📦 项目结构

```
local-command-panel/
├── electron/                 # Electron 相关文件
│   ├── main.ts              # 主进程入口
│   ├── preload.ts           # 预加载脚本
│   └── electron-env.d.ts    # Electron 类型定义
├── src/                     # Vue 应用源码
│   ├── components/          # Vue 组件
│   │   └── HelloWorld.vue   # 示例组件
│   ├── App.vue              # 根组件
│   ├── main.ts              # Vue 应用入口
│   ├── style.css            # 全局样式
│   └── vite-env.d.ts        # Vite 环境类型定义
├── package.json             # 项目配置和依赖
├── vite.config.ts           # Vite 配置
├── uno.config.ts            # UnoCSS 配置
├── tsconfig.json            # TypeScript 配置
├── eslint.config.mjs        # ESLint 配置
└── README.md                # 项目说明
```

## 🛠️ 开发环境要求

- Node.js >= 22.0.0
- PNPM >= 10.0.0

## 📥 安装

```bash
# 克隆项目
git clone <repository-url>
cd local-command-panel

# 安装依赖
pnpm install
```

## 🚦 开发

```bash
# 启动开发服务器
pnpm dev
```

这将启动：
- Vite 开发服务器 (http://localhost:8080)
- Electron 应用程序
- 热重载功能

## 🔨 构建

```bash
# 构建生产版本
pnpm build
```

构建命令将：
1. 运行 TypeScript 类型检查 (`vue-tsc`)
2. 构建 Vue 应用 (`vite build`)
3. 打包 Electron 应用 (`electron-builder`)

构建产物将输出到 `release/<version>/` 目录。

## 📋 预览

```bash
# 预览构建结果
pnpm preview
```

## 🏗️ 应用配置

### Electron 配置

- **窗口大小**: 800x600
- **菜单栏**: 隐藏
- **开发工具**: 开发模式下启用
- **预加载脚本**: 启用安全的 IPC 通信

### 构建配置

- **应用 ID**: com.electron.desktop
- **产品名称**: electron
- **支持平台**: Windows (NSIS 安装包), macOS (DMG)
- **架构**: x64
- **ASAR 打包**: 启用

## 🎯 功能特性

- ⚡ 快速的开发体验 (Vite HMR)
- 🎨 原子化 CSS (UnoCSS)
- 📱 响应式设计
- 🔧 TypeScript 类型安全
- 🌐 跨平台桌面应用
- 📦 自动化构建和打包
- 🔍 代码质量检查 (ESLint)

### 常见问题

1. **Electron failed to install correctly, please delete node_modules/electron and try installing again**
   - [fix](https://github.com/electron/electron/issues/20731)
   - pnpm approve-builds electron
   - pnpm rebuild electron
   - pnpm exec electron --version
  package.json
  ```json
  "pnpm": {
      "onlyBuiltDependencies": ["electron"]
  }
  ```

2. **pnpm rebuild electron timeout**
   - npmrc 添加 ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
