---
title: Customize checkbox
date: "2022-06-03"
description: ""
tags: ["svelte"]
---

Since the moment I started a project with Svelte. I have an issue while creating
checkbox component. Svelte's checkbox component behaves like a radio button.

The issue is [**right here**](https://github.com/sveltejs/svelte/issues/2308)

First, create a component like this:

```html
<!--Checkbox.svelte-->
<script>
    import {createEventDispatcher} from "svelte";

    export let checked;

    const dispatch = createEventDispatcher();

    const toggle = () => {
        checked = !checked;
        dispatch('toggle', {'checked': checked});
    };
</script>

<div on:click={toggle}>
    <!-- Checkbox -->
    <img src="/image/{checked? 'icon-checkbox-checked.svg' : 'icon-checkbox-empty.svg'}" alt="img"/>

    <!-- Label -->
    <p class="flex-initial text-base sm:text-lg ml-6
            text-tpa-blue group-hover:text-tpa-blue-hi group-active:text-tpa-blue">
        <slot/>
    </p>
</div>
```

And use it like this:

```html
<script>
    // ...
    const toggleOption = option => {
        if (group.some(item => item === option)) {
            group = group.filter(currItem => currItem !== option);
        }
        else {
            group = [ ...group, item];
        }
    };
    // ...
</script>

<!--...-->
<Checkbox
      checked={group.some(item => item === option)}
        on:toggle={() => toggleOption(region)}>
        Hamburger
</Checkbox>
```

