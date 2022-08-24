const esbuild = require(`esbuild`) // eslint-disable-line @typescript-eslint/no-var-requires

esbuild
  .build({
    entryPoints: [`./src/index.ts`],
    outdir: `web`,
    bundle: true,
    format: `esm`,
    target: `es2020`,
    sourcemap: true,
  })
  .catch(() => process.exit(1))
