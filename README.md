# buybuyfashion

## まず初めに
当開発環境は以下に依存しています。  
  
|  |  |
|--|--|
| package manager | pnpm |
| linter | eslint |
| formatter | prettier |
| commit | commitlint |
| hook | lefthook |

作業を開始する前に以下コマンドを実行してください。  
  
```bash
pnpm install
```

もし、commit時にlinterやformatterが動いてない場合、
```bash
pnpm dlx lefthook install
```
を実行してください。