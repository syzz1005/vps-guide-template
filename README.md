# VPS / Cloud Guide Template

> **非官方选购与评测指南模板** · 复制本仓即可快速生成「一家一仓」的公共仓库  
> 含：**清晰 README** + **GitHub Pages 精美单页** + **可更新数据字段** + **推广披露**

---

## 这是什么

把任意一家 VPS / 云厂商做成独立公共仓库时使用的标准骨架：

| 文件 | 作用 |
|------|------|
| `README.md` | GitHub 首页：结论先行、速览表、适合/不适合、CTA |
| `site/index.html` | 精美单页，部署到 GitHub Pages |
| `data/vendor.yaml` | 套餐、卖点、联盟链接、更新日期（评测与优惠从网络收集后填这里） |
| `AFFILIATE_DISCLOSURE.md` | 推广关系披露 |
| `AFFILIATE_SIGNUP_GUIDE.md` | 各商家推广开通顺序与入口（整份矩阵共用） |
| `.github/workflows/pages.yml` | 自动发布 `site/` 到 Pages |

---

## 5 分钟开一个新厂商仓

1. 用本仓作模板：GitHub → **Use this template** → 命名 `vps-guide-<slug>` 或 `cloud-guide-<slug>`
2. 编辑 `data/vendor.yaml`（名称、套餐、联盟链接、`updated_at`）
3. 替换 README 与 `site/index.html` 里的厂商文案（当前示例为 ExampleCloud 占位）
4. 仓库 **Settings → Pages → Source: GitHub Actions**
5. 推送后打开 `https://<你的用户名>.github.io/<仓库名>/`

> 评测结论与优惠信息请从官网 / 可信评测站 **网络收集后写入**，并在页面标注「数据截至」日期。不要编造延迟或价格。

---

## README 建议结构（复制后按此填）

1. 一句话结论  
2. 30 秒速览表  
3. 适合 / 不适合  
4. 套餐怎么选  
5. 上手步骤 + 推广 CTA（`rel="sponsored"`）  
6. 链回总对比仓  
7. 披露 + 更新时间 + 来源  

每仓必须有一个 **差异化模块**（支付坑、闪购须知、CLI 上手等），避免千仓一面。

---

## 关键厂商占位

当前示例数据为 **ExampleCloud**（虚构占位）。复制后请整份替换为真实厂商，并填入你的联盟链接。

**推广链接（示例占位，请替换）：** [查看当前方案（含推广链接）](#)

---

## 披露

本模板及衍生仓库可能包含联盟推广链接。点击购买，作者可能获得佣金；**不会增加你的费用**。详见 [AFFILIATE_DISCLOSURE.md](./AFFILIATE_DISCLOSURE.md)。

完整开通指南见：[AFFILIATE_SIGNUP_GUIDE.md](./AFFILIATE_SIGNUP_GUIDE.md)

---

## License

文档与页面内容默认 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)；代码（CSS/JS/workflow）默认 MIT。第三方商标归其权利方所有；本仓 **非官方**、与厂商无隶属关系。
