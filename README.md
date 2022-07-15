<div align="center">
    بسم الله الرحمن الرحيم
</div>

# Image Watcher

Track image loading with Alpine.js like a hunter!

### Description

This package creates an Alpine.js [directive](https://alpinejs.dev/advanced/extending#custom-directives), which one could use to do *stuff* **when** images are loaded.

We start off by defining an alpine.js object variable with `isLoaded` property set to `false`. Then apply the `x-image-watcher` custom directive to the `<img>` element directly **or to a parent element that contains an `<img>` element** within...

And when the image is loaded, the `imageWatcher` associated with it - as an example of our object variable - would have its `isLoaded` property set to **`true`**.

An example code for the [TALL Stack](https://tallstack.dev) would be something like this:

```html
<div
    x-data="{ imageWatcher: { isLoaded: false } }"
    x-image-watcher="imageWatcher"
>
    <img
        src="{{ asset('images/cool-image.png') }}"
        alt="cool image"
    >

    <span
        x-cloak
        x-show="imageWatcher.isLoaded"
        x-transition
    >
        The image is loaded! No way!
    </span>

    <!-- A timed example too! -->
    <span
        x-data="{ show: false }"
        x-effect="
            if (imageWatcher.isLoaded) {
                setTimeout(() => show = true, 1000);
            }
        "
        x-cloak
        x-show="show"
        x-transition
    >
        Wait a second...!
    </span>
</div>
```


## Installation

Again, since this is an Alpine.js directive, we need that awesomeness installed first!

### Requirements

- [Alpine.js](https://alpinejs.dev)

### Steps

1. Install the package via NPM:

   ```bash
   npm install @minsulaiman/image-watcher
   ```

2. Compile your `app.js` after adding an Alpine.js plugin like this:

   ```js
   ...
   import Alpine from 'alpinejs';
   import imageWatcher from 'alpinejs-image-watcher';

   Alpine.plugin(imageWatcher);

   Alpine.start();
   ...
   ```


## Development

If you like the package, you know how to **p**ull-**r**equest! 🙂

### TODOs

- Write [Cypress](https://cypress.io) tests! 🙂


## Remarks

Please do 🌟 all the packages you rely on, but NOT this one. 😍


<div align="center">
    <br>والحمد لله رب العالمين
</div>
