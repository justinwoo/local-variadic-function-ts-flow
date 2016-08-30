# Variadic function test with Typescript and Flowtype

This repository demonstrates a case in which a variadic function is used locally in a project in Typescript and Flow.

In the case of Typescript, the function can have overriding signatures directly in the source, and the correct signature and type is selected for the function. This works correctly and as expected.

In the case of Flowtype, there does not seem to be a way to have overriding signatures directly in the source, thus, the `assign2` function has been moved to a local module, but not using Flowtype directly in the file. Instead, a lib definition is made for the module.

In this case, only the last definition in the lib file seems to be used, ignoring the previous definitions. The correct signature based on arity is never chosen. You can see this by commenting out lines as you go to see which will show the error.

However, this is not the behavior that holds for external modules' variadic functions. For external modules, the correct arity will be selected, *but only if the definitions are written in descending argument length order.* See [this repository](https://github.com/justinwoo/flow-type-select-ordering) for a demonstration.
