# `unplugin-auto-import` Bug

Reproduction of https://github.com/antfu/unplugin-auto-import/issues/307

```sh
pnpm i
pnpm dev
```

Then edit `src/module.ts` to what is listed in the issue as a work around, making the exports separate from the declarations. Once you save the file, `auto-imports.d.ts` will change to show the imports are now recognized.
