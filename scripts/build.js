let fs = require('fs');

if (! fs.existsSync(`./dist`)) {
    fs.mkdirSync(`./dist`, 0744);
}

build({
    entryPoints: [`builds/module.js`],
    outfile: `dist/module.esm.js`,
    platform: 'neutral',
    mainFields: ['module', 'main'],
});

build({
    entryPoints: [`builds/module.js`],
    outfile: `dist/module.cjs.js`,
    target: ['node10.4'],
    platform: 'node',
});

function build(options) {
    options.define || (options.define = {});

    return require("esbuild")
        .build({ ...options, minify: true, bundle: true })
        .catch(() => process.exit(1));
}
