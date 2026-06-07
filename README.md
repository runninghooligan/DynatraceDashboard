# ICC Command Center GitHub Pages Starter

This is a static, interactive HTML/CSS/JavaScript prototype designed for GitHub Pages.

## Files

- `index.html` - main page
- `src/styles.css` - styling
- `src/app.js` - tab behavior and ECharts charts
- `assets/` - optional folder for images or exported data

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this package.
3. Go to repository **Settings** > **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Save.

Your site will be available at a URL similar to:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Notes

This prototype loads Apache ECharts from a CDN. If you need it to work on a locked-down corporate network, download ECharts locally and update the script reference in `index.html`.
