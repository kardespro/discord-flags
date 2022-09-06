## 🛡 Discord-flags

**An Easy Tool For User Flags Information**

## Installation

```bash
npm i discord-flags
```

## Usage

```js
import { find } from 'discord-flags'
// supporting esm 6 and commonjs
const { find } = require("discord-flags")

console.log(find(client.user.public_flags))
// output : DISCORD_EMPLOYEE
```