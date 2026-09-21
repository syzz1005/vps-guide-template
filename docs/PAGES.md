# 如何从模板发布到 GitHub Pages

1. 仓库 **Settings → Pages**  
2. **Source** 选 **GitHub Actions**  
3. 推送 `main` 后等待 workflow `Deploy GitHub Pages` 变绿  
4. 访问 `https://<user>.github.io/<repo>/`  

本地预览：

```bash
cd site && python3 -m http.server 8080
```

浏览器打开 `http://127.0.0.1:8080`。
