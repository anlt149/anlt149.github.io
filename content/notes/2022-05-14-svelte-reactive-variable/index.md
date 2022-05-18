---
title: Svelte triggers function call everytime a variable changes
date: "2022-05-14"
description: "Publish gatsby web application to github pages."
tags: ["svelte"]
---

Calling a function everytime a variable changes...

```js
    $: <variable>, function()
```

Even though the variable is in its own statement (before the comma) which does nothing functionally,
Svelte sees the variable and will cause the statement to trigger when the variable's value changes

```js
$: <variable1>,<variable2>,function(arguments)
```
