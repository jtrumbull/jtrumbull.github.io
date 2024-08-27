
<div style="text-align: center;">
  <img src="src/images/icon.png" width="200">
  <h3>http://jtrumbull.github.io</h3>
</div>

# Build

```
> gulp --tasks
```

```
> gulp build:all        # Build the entire site
> gulp build:favicons   # Build favicons
> gulp build:fonts      # Build fonts
> gulp build:icons      # Build icons
> gulp build:scripts    # Build scripts
> gulp build:styles     # Build styles
> gulp build:pages      # Build pages
> gulp clean:all        # Cleans all generated files
> gulp clean:favicons   # Cleans favicons
> gulp clean:fonts      # Cleans fonts
> gulp clean:icons      # Cleans icons
> gulp clean:scripts    # Cleans scripts
> gulp clean:styles     # Cleans styles
> gulp clean:pages      # Cleans pages
> gulp watch:all        # Watches for changes then builds
> gulp watch:favicons   # Watch favicons
> gulp watch:fonts      # Watch fonts
> gulp watch:icons      # Watch icons
> gulp watch:scripts    # Watch scripts
> gulp watch:styles     # Watch styles
> gulp watch:pages      # Watch pages
```
Generates static site to the `www` directory

# Deploy

Deployment is triggered via pushes targeting the `production` branch. See `.github/workflows` for more details.

# License
```
See the LICENSE file
```