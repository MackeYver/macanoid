@echo off
del main.js*
call tsc --moduleResolution "classic" --removeComments --noFallthroughCasesInSwitch --noImplicitAny --noImplicitReturns --noImplicitThis --noUnusedLocals --noUnusedParameters --lib "dom, es5" main.ts
call minify main.js
del main.js
rename mini_main.js main.js