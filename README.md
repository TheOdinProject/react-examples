# React Examples

This repository houses React examples used as part of The Odin Project's React course.

## How To Add A React Example

These steps should only be done if a maintainer has assigned you to make a new React example for a lesson. This will only happen as part of a discussion in an issue in our [curriculum repo](github.com/TheOdinProject/curriculum).

1. Read through the [contributing guide](https://github.com/TheOdinProject/.github/blob/main/CONTRIBUTING.md#curriculum-structure).
1. Make sure you have Node and npm installed. You may use the [Installing Node.js](https://www.theodinproject.com/lessons/foundations-installing-node-js) lesson to install these tools.
1. Fork & clone this repository. Install dependencies by running `npm install`.
1. Create a new example folder by copying the `boilerplate` folder. And `cd` into it and install dependencies.

   ```bash
   cp -R ./boilerplate ./<example-name>
   cd ./<example-name>
   npm install
   ```

1. Code out your example.
1. Start the dev server with `npm run dev` to make sure the example runs as expected.
1. Run `npm run lint` for ESLint and Prettier to lint and format the code.
1. Create a pull request. Make sure to provide a link to the PR in the curriculum repo for the associated lesson changes (if you make this PR first, you can edit the curriculum PR link in once done).

### Naming Examples

Make sure that examples are clearly named, meaning they should convey what the example is about on a glance. Examples:

```c
// bad
example-1
state-example
arrays

// good
hello-world
passing-props
rendering-arrays-in-jsx
```
