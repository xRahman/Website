import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import { routify } from "@sveltech/routify";
import { markdown } from "svelte-preprocess-markdown";

import * as childProcess from "child_process";

const production = !process.env.ROLLUP_WATCH;

// // Use an immediately invoked wrapper function to declare
// // stuff local to this script (otherwise it would be global).
// (
//   function iifeWrapper()
//   {
//     // Now declare the local stuff:
//     function serve()
//     {
//       let server;

//       function toExit()
//       {
//         if (server)
//           server.kill(0);
//       }

//       function writeBundle()
//       {
//         if (server)
//           return;

//         server = childProcess.spawn
//         (
//           "npm",
//           [ "run", "start", "--", "--dev" ],
//           {
//             stdio: [ "ignore", "inherit", "inherit" ],
//             shell: true
//           }
//         );

//         process.on("SIGTERM", toExit);
//         process.on("exit", toExit);
//       }

//       return { writeBundle };
//     }
//     // End of iife wrapper.
//   }()
// );

// Now declare the local stuff:
function serve()
{
  let server;

  function toExit()
  {
    if (server)
      server.kill(0);
  }

  function writeBundle()
  {
    if (server)
      return;

    server = childProcess.spawn
    (
      "npm",
      [ "run", "start", "--", "--dev" ],
      {
        stdio: [ "ignore", "inherit", "inherit" ],
        shell: true
      }
    );

    process.on("SIGTERM", toExit);
    process.on("exit", toExit);
  }

  return { writeBundle };
}

export default
{
  input: "src/main.ts",
  output:
  {
    sourcemap: !production,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js"
  },
  plugins:
  [
    routify({ singleBuild: production }),
    svelte
    (
      {
        // Add '.md', to the extensions.
        extensions: [ ".svelte", ".md" ],
        // Add markdown preprocessor.
        preprocess:
        [
          markdown(),
          sveltePreprocess({ sourceMap: !production })
        ],
        compilerOptions:
        {
          // enable run-time checks when not in production
          dev: !production
        }
      }
    ),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve
    (
      {
        browser: true,
        dedupe: [ "svelte" ]
      }
    ),
    commonjs(),
    typescript
    (
      {
        sourceMap: !production,
        inlineSources: !production
      }
    ),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we"re building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: { clearScreen: false }
};