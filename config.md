# Setup Typescript with Bun

1. Installation

```bash
npm install -g bun
```

2. Upgrade version

```bash
bun upgrade
```

3. Initialize project

```bash
bun init
```

4. Started project

```bash
bun run [name_file]
```

5. JSX installation

```bash
bun add react
```

```bash
bun add @types/react --dev
```

6. Run another env

```bash
export NODE_ENV=[name_file_env]
```

7. Watch mode

```bash
bun run --watch [name_file]
```

8. Test runner

```bash
bun test
```

```bash
bun test --watch
```

9. Workspaces

```json
"workspaces": [
    "packages/*"
  ],
```
