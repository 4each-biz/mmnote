# mmnote

### サポートページ (system-support)

- 利用者向けのマニュアル・FAQ・規約類は system-support に載せている。公開ページ: https://support.trusted-host.online/t/mmnote
- 原本は `docs/support/documents.md`。文書は管理画面で編集せず、原本を直して API で取り込む
- 手順と形式は `docs/support/system-support-ai-kit-mmnote.md` (AI スタートキット) の 5・6・8 章に従う
- API キーは、リポジトリの直下の `system-support-api-key.env` (Git に入れない。中身は `SUPPORT_API_KEY=…`。無ければ環境変数 `SUPPORT_API_KEY`)。このファイルを開かない・値を表示しない・ほかのファイルやコミットや会話に写さない。作業の最初に `git check-ignore -q system-support-api-key.env` で無視されていることを確かめる。API を呼ぶときは、キットの 6 章の形で、1 つのコマンドの中で読み込む: `( [ -f system-support-api-key.env ] && . ./system-support-api-key.env; curl … -H "Authorization: Bearer $SUPPORT_API_KEY" … )`
- 取り込みは、原本に書いた文書とカテゴリにサーバーをそろえる (原本に無い文書は消える。同じ slug の文書は同じ文書として更新され、規約・ポリシーの版の履歴は残る)。必ず先に書き出し、管理画面で直された分を原本に取り込んでから、原本を取り込む。書き出しと原本は、並びが違うので、キットの 6 章の比較のスクリプトで比べる
  - 書き出し: `GET https://support.trusted-host.online/api/v1/tenants/mmnote/export`
  - 取り込み: `POST https://support.trusted-host.online/api/v1/tenants/mmnote/import` (`-F "file=@docs/support/documents.md"`)
- 機能を足したとき・操作を変えたときは、影響するマニュアルと FAQ を直して取り込む
- リリースのときは、リリースノートを 1 件投稿する: `POST https://support.trusted-host.online/api/v1/tenants/mmnote/documents` (`"type": "release"`、slug は `v1-2-0` の形、`ja` と `en` の両方)。投稿は API では直せず消せないので、表題と本文の案を見せ、「はい」を得てから投稿する。同じ版を 2 回投稿しない。原本には入れない
- 規約類 (利用規約・プライバシーポリシー・運営会社) は、利用者が確かめて「公開してよい」と言うまで `status: draft`。雛形の内容は保証されていない。内容の確認と公開は利用者の責任。公開の前に、先に記入の印 (`【要記入`・`[TO FILL IN`) が残っていないことを確かめ (残っていれば、利用者に聞く)、そのあとで「内容を自分の責任で確かめたか」を 1 度たずねる。集める情報・料金・外部のサービスが変わるときは、直す案を見せて確かめる
