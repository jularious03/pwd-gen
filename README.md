# pwd-gen

A simple Node.js module for generating random passwords with a configurable length and optional special characters.

## Installation

```bash
npm install @jularious/pwd-gen
```

## Usage

```js
const generatePassword = require('@jularious/pwd-gen');

const password = generatePassword(16);
console.log(password);
```

### Without special characters

```js
const generatePassword = require('@jularious/pwd-gen');

const password = generatePassword(20, false);
console.log(password);
```

## Parameters

```js
generatePassword(length, specialChars);
```

- `length`: Length of the generated password.
- `specialChars`: Enables or disables special characters. The default value is `true`.

## Examples

```js
generatePassword(8);         // 8 characters with special characters
generatePassword(12, true);  // 12 characters with special characters
generatePassword(16, false); // 16 characters without special characters
```

## License

MIT
