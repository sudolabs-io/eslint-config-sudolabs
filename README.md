# `@sudolabs-io/eslint-config-sudolabs`

Our one for all `eslint-config` to use across our JavaScript/TypeScript projects

## Installation

Many different configurations can be combined with this package.
There are some entry level configurations which should not be combined in between themselves that provide most essential configuration depending on the technologies used within the project you are working on.
Additional configurations are provided to extend the entry level configuration with some of the optional tooling that can be used within your project.

### Dependencies

All `eslint` plugins are installed as a `peerDependency` as defined in the [official _eslint_ guide on sharable configurations](https://eslint.org/docs/developer-guide/shareable-configs).
To install dependencies for all plugins you can simply run following command:

```bash
npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs
```

This might installed dependencies that you might not use (`eslint-plugin-jest`, `eslint-plugin-cypress`). All dependencies are marked as optional so you can then remove them if it bothers you.

If you prefer manually installing `peerDependencies` they will be included in the installation examples to the according configurations.

### Entry level configurations

These configurations should not be used together. All of the common functionality is already being modularized within the scope of this package.

This is due to different `air-bnb` rules and plugins being included in the respective configurations.

#### Typescript projects

For simple node projects your `.eslintrc` configuration should look like this:

```json
{
  "extends": ["@sudolabs-io/eslint-config-sudolabs/typescript"]
}
```

This configuration needs following dependencies to be installed:

```bash
npm i -D eslint @sudolabs-io/eslint-config-sudolabs @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-simple-import-sort
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

Typescript projects with React should use different entry configuration:

```json
{
  "extends": ["@sudolabs-io/eslint-config-sudolabs/typescript-react"]
}
```

This configuration needs following dependencies to be installed:

```bash
npm i -D eslint @sudolabs-io/eslint-config-sudolabs @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

> Note: This configuration can be used in projects that are also `node` projects. You don't have to include multiple configurations for mono-repo projects.

#### JavaScript

For simple node projects your `.eslintrc` configuration should look like this:

```json
{
  "extends": ["@sudolabs-io/eslint-config-sudolabs/javascript"]
}
```

This configuration needs following dependencies to be installed:

```bash
npm i -D eslint @sudolabs-io/eslint-config-sudolabs eslint-config-airbnb eslint-plugin-import
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

Projects with React should use different entry configuration:

```json
{
  "extends": ["@sudolabs-io/eslint-config-sudolabs/javascript-react"]
}
```

This configuration needs following dependencies to be installed:

```bash
npm i -D eslint @sudolabs-io/eslint-config-sudolabs eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

> Note: This configuration can be used in projects that are also `node` projects. You don't have to include multiple configurations for mono-repo projects.

### Configuration extenders

These _extenders_ serve as optional recommended rules that could be plugged in to the configuration.

Plugins are located in the `with` folder to be recognized as _extending_ plugins.

#### Jest

Example usage with `typescript-react` configuration:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript-react",
    "@sudolabs-io/eslint-config-sudolabs/with/jest"
  ]
}
```

To enable this configuration you need to install additional `peerDependecies`:

```bash
npm i -D eslint-plugin-jest
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

#### Cypress

Cypress `.eslintrc` configuration file should be placed within your projects `/cypress` folder.

```json
{
  "extends": ["@sudolabs-io/eslint-config-sudolabs/with/cypress"]
}
```

To enable this configuration you need to install additional `peerDependecies`:

```bash
npm i -D eslint-plugin-cypress
```

> You don't have to install these dependencies if you've installed all dependencies with `npx install-peerdeps --dev @sudolabs-io/eslint-config-sudolabs`

#### Prettier

Most of the projects use `prettier` for formatting.
To enable `prettier` with recommended rules you should **add it at the last position** in the `extends` array field.

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript-react",
    "@sudolabs-io/eslint-config-sudolabs/with/jest",
    "@sudolabs-io/eslint-config-sudolabs/with/prettier"
  ]
}
```

To enable this configuration you need to install additional `peerDependecies`:

```bash
npm i -D eslint-plugin-prettier eslint-config-prettier
```
