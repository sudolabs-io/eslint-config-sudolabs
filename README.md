# `@sudolabs-io/eslint-config-sudolabs`

Our one for all `eslint-config` to use across our JavaScript/TypeScript projects

## Installation

Many different configurations can be combined with this package.
There are some entry level configurations which should not be combined in between themselves that provide most essential configuration depending on the technologies used within the project you are working on.  Additional configurations are provided to extend the entry level configuration with some of the optional tooling that can be used within your project.

### Entry level configurations

These configurations should not be used together. All of the common functionality is already being modularized within the scope of this package.

This is due to different `air-bnb` rules and plugins being included in the respective configurations.

#### Typescript projects

For simple node projects your `.eslintrc` configuration should look like this:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript",
  ]
}
```

Typescript projects with React should use different entry configuration:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript-react",
  ]
}
```

> Note: This configuration can be used in projects that are also `node` projects. You don't have to include multiple configurations for mono-repo projects.

#### JavaScript

For simple node projects your `.eslintrc` configuration should look like this:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/javascript",
  ]
}
```

Projects with React should use different entry configuration:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/javascript-react",
  ]
}
```

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

#### Cypress

Example usage with `typescript-react` & `with/jest` configuration:

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript-react",
    "@sudolabs-io/eslint-config-sudolabs/with/jest"
    "@sudolabs-io/eslint-config-sudolabs/with/cypress"
  ]
}
```

#### Prettier

Most of the projects use `prettier` for formatting.
To enable `prettier` with recommended rules you should **add it at the last position** in the `extends` array field.

```json
{
  "extends": [
    "@sudolabs-io/eslint-config-sudolabs/typescript-react",
    "@sudolabs-io/eslint-config-sudolabs/with/jest"
    "@sudolabs-io/eslint-config-sudolabs/with/prettier"
  ]
}
```

TODO: Document dependencies installation


## Collaboration

This configuration was created according to [official _eslint_ guide](https://esling.org/docs/developer-guide/shareable-configs)
