tsc --version
tsc --init

change target to es6 if you want to work in new syntax

Uncomment "outDir":"./" -- this will be compiled javascript folder
"outDir":"./build"
and
"rootDir":"./" -- this will be our main typescript folder
"rootDir":"./src"

uncomment "moduleResolution":"node"
