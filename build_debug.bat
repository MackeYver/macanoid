@echo off
del main.js*
tsc --moduleResolution "classic" --removeComments --noFallthroughCasesInSwitch --noImplicitAny --noImplicitReturns --noImplicitThis --noUnusedLocals --noUnusedParameters --sourceMap --lib "dom, es5" --target "es5" main.ts