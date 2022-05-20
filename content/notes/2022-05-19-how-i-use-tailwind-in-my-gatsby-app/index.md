---
title:
  How I used Tailwind CSS in my project.
date: "2022-05-19"
description:
    How I used Tailwind CSS in my project.
tags: ["gatsby"]
---

I am in love with using Tailwind CSS in my project, so when I came up to Gatsby, I must bring Tailwind CSS with me.
There are quite simple steps to install and use it right away.

## 1. Install dependencies

First thing first, we need to install `tailwindcss` and its peer dependencies, as well as `gatsby-plugin-postcss`

```shell
npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss
```

If the installation is succeed, run the below command to generate both `tailwind.config.js` and `postcss.config.js`.

```shell
npx tailwindcss init -p
```

The project's struture will be:

```text
project
|-- content
|    |-- blogs
|-- public
|-- src
|-- ...
|
|-- tailwind.config.js
|-- postcss.config.js
```

## 2. Enable plugins and configure the project

Next, I enable the Gatsby PostCss plugin in `gatsby-config.js`
More information at [**https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/**](https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/)

```js
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}
```

Now configure template paths in order to enable which file extension could use Tailwind CSS classes.
Add the paths to all of your template files in `tailwind.config.js` file.

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a css file in styles directory `./src/styles/Global.css` and add the following lines

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In `gatsby-browser.js` import the css file path.

```js
import './src/styles/global.css'
```

Run the following command to start the build process

```bash
gatsby develop
```

Start using Tailwind’s utility classes to style UI.

```html
<Layout>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
</Layout>
```

## Resource

+ [https://tailwindcss.com/docs/guides/gatsby](https://tailwindcss.com/docs/guides/gatsby)
