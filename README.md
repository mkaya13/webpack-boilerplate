# Webpack-Boilerplate Setup

1 - Start with the steps in at https://webpack.js.org/guides/getting-started/#basic-setup

2 - Then follow https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin for setting up the htmlwebpack plugin

3 - Then create your own /src/index.html

```
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wbpack Exercise</title>
</head>
<body>
    <h1>Hello webpack!</h1>
</body>
</html>
```

4 - Modify webpack.config.js with the below code

```
plugins: [
  new HtmlWebpackPlugin({
-   title: 'Output Management',
+   template: './src/index.html',
  }),
],
```

5 - Then run `npm run build`

6 - Follow these steps for adding css `https://webpack.js.org/guides/asset-management/#loading-css`

7 - Add your style.css:

`body { background-color: bisque; }`

8 - `npm run build`

9 - The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading. Let's set it up:

`https://webpack.js.org/guides/development/#using-webpack-dev-server`
