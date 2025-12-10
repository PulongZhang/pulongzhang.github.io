# 文章写作规范

## 文件命名格式

文章文件必须放在 `_posts` 目录下，文件名格式为：

```
年-月-日-标题.md
```

示例：
- `2025-12-01-我的第一篇文章.md`
- `2025-12-15-学习笔记.md`

## 文章头部信息（Front Matter）

每篇文章开头必须包含以下格式：

```markdown
---
title: 文章标题
tags: 标签1 标签2
---
```

## 常用 Front Matter 字段

```markdown
---
layout: article             # 推荐，使用 article 布局
title: 文章标题              # 必填
key: 20251203-article-name  # 必填，文章唯一标识符（格式：年月日-主题）
tags: 标签1 标签2           # 可选，多个标签用空格分隔
author: 张蒲龙              # 可选
aside:                      # 可选，侧边栏配置
  toc: true                 # 显示文章目录
typora-root-url: ./..       # Typora 编辑器图片路径配置
---
```

**重要字段说明：**
- `key`: 文章的唯一标识符（**必填**）
  - **格式规范**：`YYYYMMDD-主题名称`（如 `20251203-my-first-post`）
  - 日期部分：8位数字，格式为年月日（如 `20251203`）
  - 主题部分：使用小写英文和连字符，简短描述文章主题（如 `ai-agent`、`life-thinking`）
  - 这个字段用于文章的内部引用和永久链接生成

## 文章摘要分隔符

使用 `<!--more-->` 来分隔文章摘要和正文：
- 主页上只会显示 `<!--more-->` 之前的内容作为摘要
- 点击"阅读更多"后才能看到完整文章

## 完整示例

```markdown
---
layout: article
title: 我的第一篇文章
key: 20251201-my-first-post
tags: Life Draft
author: 张蒲龙
aside:
  toc: true
typora-root-url: ./..
---

这是文章的开头部分，会显示在主页摘要中。

<!--more-->

这是文章的正文部分，只有点击进入文章后才能看到。

## 二级标题

可以使用 Markdown 语法：

- 列表项1
- 列表项2

**粗体文字** *斜体文字*

[链接文本](https://example.com)

代码块：
```python
print("Hello, World!")
```
```

## Markdown 语法支持

本博客支持完整的 Markdown 语法，包括：
- 标题（# ## ### 等）
- 列表（有序和无序）
- 链接和图片
- 代码块和行内代码
- 表格
- 引用块
- 数学公式（MathJax）
- 图表（mermaid, chartjs）
