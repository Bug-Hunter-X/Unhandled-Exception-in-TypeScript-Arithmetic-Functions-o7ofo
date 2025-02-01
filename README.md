# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: unhandled exceptions. The `divide` function throws an error if the second argument is zero, but the calling code doesn't handle this possibility. This can lead to unexpected crashes in production.

The `bug.ts` file contains the original code with the unhandled exception. The `bugSolution.ts` file shows how to handle the exception using a `try...catch` block.