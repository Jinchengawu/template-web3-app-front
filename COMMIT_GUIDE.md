# Git Commit 消息规范指南

本项目使用 Conventional Commits 规范来标准化 commit 消息格式，并且**要求使用中英文双语**书写。

## 配置说明

### 1. Cursor AI 配置 (`.cursorrules`)
- 为 Cursor 的 "Generate Commit Message" 功能提供了详细的提示词
- 确保 AI 生成的 commit 消息符合项目规范

### 2. Git 模板 (`.gitmessage`)
- 提供了 commit 消息的模板和示例
- 已配置为项目的默认 commit 模板

### 3. Commitlint 配置
- `commitlint.config.js` 和 `.commitlintrc.json` 配置了 commit 规范检查
- 使用 `@commitlint/config-conventional` 预设

### 4. VS Code 设置
- 在 `.vscode/settings.json` 中添加了 Git 相关配置
- 设置了 commit 消息长度验证

## Commit 消息格式

```
<type>[optional scope]: <英文描述> - <中文描述>

[optional body]

[optional footer(s)]
```

### 语言要求
- **必须同时包含中文和英文描述**
- 中文用于详细说明变更内容
- 英文用于简洁的技术描述
- 格式：`<英文描述> - <中文描述>`

### Type 类型

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat(auth): add OAuth2 login - 添加OAuth2登录` |
| `fix` | 修复 bug | `fix(api): resolve authentication issue - 修复认证问题` |
| `docs` | 文档更新 | `docs(readme): update installation guide - 更新安装指南` |
| `style` | 代码格式调整 | `style: format code with prettier - 使用prettier格式化代码` |
| `refactor` | 代码重构 | `refactor(components): extract button component - 提取按钮组件` |
| `perf` | 性能优化 | `perf(database): optimize user queries - 优化用户查询性能` |
| `test` | 测试相关 | `test(api): add unit tests for auth - 添加认证单元测试` |
| `chore` | 构建过程或辅助工具变动 | `chore: update dependencies - 更新依赖包` |
| `ci` | CI/CD 相关 | `ci: add GitHub Actions workflow - 添加GitHub Actions工作流` |
| `build` | 构建系统或外部依赖变动 | `build: update webpack config - 更新webpack配置` |
| `revert` | 回滚之前的 commit | `revert: revert breaking changes - 回滚破坏性变更` |

### Scope 范围（可选）
指定影响的范围，例如：
- `feat(auth)` - 认证相关的新功能
- `fix(api)` - API 相关的修复
- `docs(readme)` - README 文档更新

### Description 描述
- 使用祈使句，现在时态
- 首字母小写
- 不加句号
- 不超过 50 个字符
- **必须包含中英文双语描述**
- 格式：`<英文描述> - <中文描述>`
- 英文部分简洁明了，中文部分详细说明

### Body 正文（可选）
- 详细描述变更的原因和影响
- 使用祈使句，现在时态
- 每行不超过 72 个字符
- **建议同时提供中英文说明**
- 可以先写中文详细说明，再写英文技术细节

### Footer 脚注（可选）
用于引用相关 issue：
- `Fixes #123` - 修复某个 issue
- `Closes #456` - 关闭某个 issue
- `Related to #789` - 与某个 issue 相关

## 使用 Cursor 生成 Commit 消息

1. 在 Cursor 中，选择要提交的文件
2. 使用快捷键 `Cmd+Shift+G` (Mac) 或 `Ctrl+Shift+G` (Windows/Linux) 打开 Git 面板
3. 点击 "Generate Commit Message" 按钮
4. Cursor AI 会根据 `.cursorrules` 中的配置生成符合规范的 commit 消息

## 手动编写 Commit 消息

1. 使用 `git commit` 命令（不带 `-m` 参数）
2. Git 会自动打开配置的模板文件
3. 按照模板格式编写 commit 消息
4. 保存并关闭编辑器

## 验证 Commit 消息

项目配置了 commitlint 来验证 commit 消息格式：

```bash
# 安装 commitlint（如果还没有安装）
npm install --save-dev @commitlint/cli @commitlint/config-conventional

# 验证 commit 消息
echo "feat(auth): add OAuth2 login" | npx commitlint
```

## 示例

### 简单修复
```
fix(api): resolve user authentication timeout - 修复用户认证超时问题
```

### 新功能带详细说明
```
feat(auth): add OAuth2 login support - 添加OAuth2登录支持

Implement OAuth2 authentication flow with Google and GitHub providers.
Add new login components and update user session management.
Include proper error handling and user feedback.
实现OAuth2认证流程，支持Google和GitHub提供商登录
添加新的登录组件并更新用户会话管理
包含适当的错误处理和用户反馈

Closes #123
Fixes #456
```

### 文档更新
```
docs(readme): update installation and setup instructions - 更新安装和设置说明

- Add detailed step-by-step installation guide
- Include environment variables configuration
- Update troubleshooting section
- Add development setup instructions
- 添加详细的逐步安装指南
- 包含环境变量配置说明
- 更新故障排除部分
- 添加开发环境设置说明
```

## 注意事项

1. **保持一致性**: 所有 commit 消息都应该遵循相同的格式
2. **简洁明了**: Description 应该简洁地描述变更内容
3. **详细说明**: 对于复杂的变更，使用 body 部分提供详细信息
4. **引用 Issues**: 使用 footer 引用相关的 issue 或 PR
5. **中英文双语**: **必须同时包含中文和英文描述**
6. **格式统一**: 使用 `<英文描述> - <中文描述>` 的格式

## 常见错误

❌ `fixed bug` - 应该使用 `fix: resolve bug - 修复bug`
❌ `Added new feature` - 应该使用 `feat: add new feature - 添加新功能`
❌ `feat: Add OAuth2 login support.` - 不应该加句号
❌ `feat: add oauth2 login support` - 首字母应该大写（如果使用中文则保持小写）
❌ `feat(auth): add login` - 缺少中文描述
❌ `feat(auth): 添加登录功能` - 缺少英文描述
❌ `feat(auth): add login 添加登录` - 格式错误，应该使用 `-` 分隔 