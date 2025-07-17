# Enable GitHub Pages

To deploy the site to GitHub Pages, you need to manually enable it:

1. Go to: https://github.com/rowbot1/uk-govwatch-pro/settings/pages

2. Under "Source", select "GitHub Actions"

3. Click "Save"

4. The workflow will automatically run again and deploy the site

5. Your site will be available at: https://rowbot1.github.io/uk-govwatch-pro/

## Trigger Deployment

If the workflow doesn't run automatically, you can trigger it manually:

```bash
gh workflow run "Deploy to GitHub Pages" --repo rowbot1/uk-govwatch-pro
```

Or push a small change:
```bash
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push
```