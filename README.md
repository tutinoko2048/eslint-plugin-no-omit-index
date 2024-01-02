# eslint-plugin-no-omit-index
## Rules
- `no-omit-index`  
Enforce explicitly mentioning the `index` within the directory and prohibits directly specifying a directory in import statements.
```js
// OK
import { foo } from './directory/index';
import { foo } from './directory/index.js';

// Error
import { foo } from './directory';
```

## Installation
```sh
# inside your project's working tree
npm i -D eslint-plugin-no-omit-index
```

In .eslintrc.json:
```json
{
  "plugins": ["eslint-plugin-no-omit-index"],
  "rules": {
    "eslint-plugin-no-omit-index/no-omit-index": "error"
  }
}
```

