---
title: How to pass arguments to events in Svelte 
date: "2022-05-16"
description: "Simple steps to understand how to pass arguments to events in Svelte."
tags: ["svelte"]
---

Svelte events are the way we add interactivity to components in Svelte. But some time
we get a common issue with adding **arguments** to functions called within them.

For example, we have a basic counter increasing anytime user clicks on it.

```html
<script>
    let counter = 0;
    const add = () => {
        ++counter;
    }
</script>

<button on:click={add}>{counter}</button>
```

This is well done, but if we want to increase the counter by a certain amount whenever it clicked.
We might change the code to something like:

```html
<script>
    let counter = 0;
    const add = (amount) => {
        counter += amount;
    }
</script>

<button on:click={add(5)}>{counter}</button>
```

In this case, **it won't work**, we need to change our event to contain a function instead.
Let't change the `on:click` event like this:

```javascript
<button on:click={() => add(5)}>{counter}</button>
```

Right now, we call a function, which returns the value **produced** by `add`.
This also works for `events`. So If you want to pass an event or `e` object to
the function, we could do something like:

```js
<button on:click={(e) => add(e)}>{counter}</button>
```
