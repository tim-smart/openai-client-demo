import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  noExternal: [/^(effect|@effect)/],
  treeshake: "smallest",
  dts: true,
  sourcemap: true,
})
