===== EXPORT META =====
format: system-support-export
version: 2
tenant: mmnote
exported: 2026-11-22T00:00:00Z

===== CATEGORY =====
slug: getting-started
name: はじめに
nameEn: Getting Started
sortOrder: 0
parent: null

===== CATEGORY =====
slug: data
name: データと写真
nameEn: Data and Photos
sortOrder: 1
parent: null

===== CATEGORY =====
slug: trouble
name: 困ったとき
nameEn: Troubleshooting
sortOrder: 2
parent: null

===== DOCUMENT =====
type: manual
slug: introduction
parent: null
category: null
sortOrder: 0
status: published

----- ja -----

# mmnote について

mmnote (メンテナンス手帳) は、車両・機械・設備の点検や修理を記録し、次回の予定を確かめるための、スマートフォン向けの Web アプリです。機器ごとに型番・仕様・写真を登録し、記録に次回予定日を書いておくと、期限切れや期限が近い予定を画面で確かめられます。

登録やログインは要りません。データは、お使いの端末のブラウザーの中だけに保存され、どこにも送られません。

## 主な機能

- 機器の登録: 名称、種別、メーカー、型番、製造番号、導入日、仕様、メモ、写真
- メンテナンス記録: 実施日、区分 (点検・修理・交換・清掃・その他)、作業内容、費用、作業者・業者、計器の値、次回予定日、メモ、写真
- 予定の確認: 「期限切れ」「期限間近」「それ以降」に分けた一覧と、機器の一覧のバッジ
- 月ごとの費用の合計
- 写真を含む全データの書き出し (エクスポート) と読み込み (インポート)
- ダーク / ライトの切り替え、拡大率、日本語 / 英語の切り替え

## 画面の見かた

- 画面の下に、「機器」「予定」「記録」「設定」の 4 つのタブがあります。
- 画面の右上に、ヘルプ、ダーク / ライト切り替え、縮小、拡大、言語の切り替えのボタンがあります。
- タブの上の帯に、機器と記録の件数と、直前の操作の結果 (「保存しました」など) が出ます。

## 使い始めるまで

1. スマートフォンのブラウザーで https://4each-biz.github.io/mmnote/ を開きます。
2. ホーム画面に追加すると、アプリのように全画面で開けます。
   - iPhone / iPad (Safari): 共有ボタン →「ホーム画面に追加」
   - Android (Chrome): メニュー →「ホーム画面に追加」または「アプリをインストール」
3. 「機器」タブの右下の「+」で、機器を登録します。
4. 機器の詳細の「記録」で、記録を追加します。

試しに触るときは、「設定」タブの「データ」にある「サンプルデータを入れる」を押すと、機器 4 件と記録 15 件が入ります (機器も記録も無いときだけ押せます)。

:::warning
iPhone・iPad では、ホーム画面のアプリとブラウザーで保存場所が別になり、しばらく開かないとデータが消されることがあります。定期的にエクスポートしてください ([データのバックアップと移行](/t/mmnote/manual/backup))。
:::

困ったときは [お問い合わせ](/t/mmnote/contact) からご連絡ください。

----- en -----

# About mmnote

mmnote (Maintenance Notebook) is a web app for smartphones that records inspections and repairs of vehicles, machines and facilities, and shows you what is due next. Register the model, specifications and photos of each piece of equipment, write a next due date in a record, and the app shows what is overdue or due soon.

There is no sign-up and no sign-in. Your data is stored only in the browser on your device and is never sent anywhere.

## Key features

- Equipment: name, category, maker, model, serial number, acquisition date, specifications, notes, photos
- Maintenance records: date, type (Inspection, Repair, Replacement, Cleaning, Other), work done, cost, done by, meter reading, next due, notes, photos
- Due dates: a list split into "Overdue", "Due soon" and "Later", and badges in the equipment list
- Monthly cost totals
- Export and import of all data, including photos
- Dark / light theme, zoom, Japanese / English

## The screen

- Four tabs sit at the bottom: "Equipment", "Due", "Records" and "Settings".
- The buttons at the top right are Help, Toggle dark/light, Zoom out, Zoom in and the language switch.
- The bar above the tabs shows the number of equipment and records, and the result of your last action (for example "Saved").

## Getting started

1. Open https://4each-biz.github.io/mmnote/ in the browser on your smartphone.
2. Add it to your home screen to open it full screen, like an app.
   - iPhone / iPad (Safari): Share button → "Add to Home Screen"
   - Android (Chrome): menu → "Add to Home screen" or "Install app"
3. In the "Equipment" tab, tap "+" at the bottom right to add equipment.
4. In the equipment's detail screen, add a record under "Records".

To try the app, tap "Load sample data" under "Data" in the "Settings" tab. It loads 4 pieces of equipment and 15 records (available only when there is no equipment and no records).

:::warning
On iPhone and iPad, the home screen app and the browser keep separate data, and data may be removed if the app is not opened for a while. Export regularly ([Backing up and moving data](/t/mmnote/manual/backup?lang=en)).
:::

If you need help, please [contact us](/t/mmnote/contact?lang=en).

===== DOCUMENT =====
type: manual
slug: basic-usage
parent: null
category: null
sortOrder: 1
status: published

----- ja -----

# 基本の使い方

ふだんの使い方は、次の 3 つです。

1. 機器を登録する — [機器を登録する](/t/mmnote/manual/register-equipment)
2. 点検や修理をしたら、記録を付ける — [記録を付ける](/t/mmnote/manual/add-records)
3. 次回の予定を確かめる — [予定を確かめる](/t/mmnote/manual/check-dues)

写真の付け方は [写真を付ける](/t/mmnote/manual/photos) をご覧ください。

----- en -----

# Basic usage

Everyday use comes down to three things.

1. Register your equipment — [Registering equipment](/t/mmnote/manual/register-equipment?lang=en)
2. Add a record whenever you inspect or repair something — [Adding records](/t/mmnote/manual/add-records?lang=en)
3. Check what is due next — [Checking due dates](/t/mmnote/manual/check-dues?lang=en)

For photos, see [Adding photos](/t/mmnote/manual/photos?lang=en).

===== DOCUMENT =====
type: manual
slug: register-equipment
parent: basic-usage
category: null
sortOrder: 0
status: published

----- ja -----

# 機器を登録する

## 追加する

1. 「機器」タブを開き、右下の「+」(機器を追加) を押します。
2. 「機器の追加」の画面で、項目を入力します。必須なのは「名称」だけです (60 字まで)。
   - 種別: 車両 / 機械 / 設備 / その他
   - メーカー、型番、製造番号、導入日
   - 仕様: 「行を追加」で、項目と値の組を足します (30 行まで)。たとえば「定格荷重」と「1.5 t」
   - メモ
   - 写真: 「写真を追加」
3. 「OK」を押すと保存されます。

## 探す・並べ替える

- 検索の欄に文字を入れると、名称・メーカー・型番・製造番号・メモ・仕様から探します。
- 「すべての種別」のメニューで、種別で絞り込めます。
- 並べ替えは、「名称順」「期限が近い順」「更新が新しい順」から選べます。
- 期限切れや期限間近の予定がある機器には、一覧にバッジが出ます。

## 詳細を見る・直す・削除する

一覧で機器を押すと、詳細が開きます。写真、基本情報、次回予定、仕様、メモ、記録が並びます。

- 直すとき: 「編集」を押します。
- 削除するとき: 「削除」を押します。**その機器の記録と写真も、すべて消えます。** 元に戻せません。
- 一覧に戻るとき: 左上の「一覧に戻る」を押します。

----- en -----

# Registering equipment

## Add

1. Open the "Equipment" tab and tap "+" (Add equipment) at the bottom right.
2. Fill in the "Add equipment" screen. Only "Name" is required (up to 60 characters).
   - Category: Vehicle / Machine / Facility / Other
   - Maker, Model, Serial number, Acquired on
   - Specifications: tap "Add row" to add an item and its value (up to 30 rows). For example "Rated load" and "1.5 t"
   - Notes
   - Photos: "Add photos"
3. Tap "OK" to save.

## Find and sort

- Type in the search box to search the name, maker, model, serial number, notes and specifications.
- Use the "All categories" menu to filter by category.
- Sort "By name", "Due soonest" or "Recently updated".
- Equipment with something overdue or due soon shows a badge in the list.

## View, edit and delete

Tap a piece of equipment in the list to open its details: photos, details, next due, specifications, notes and records.

- To change it, tap "Edit".
- To delete it, tap "Delete". **All of its records and photos are deleted too.** This cannot be undone.
- To go back, tap "Back to list" at the top left.

===== DOCUMENT =====
type: manual
slug: add-records
parent: basic-usage
category: null
sortOrder: 1
status: published

----- ja -----

# 記録を付ける

## 追加する

1. 機器の詳細を開き、「記録」の見出しの「+」(記録を追加) を押します。「記録」タブからも追加できます (その場合は、「機器」の欄で機器を選びます)。
2. 「記録の追加」の画面で、項目を入力します。必須なのは「作業内容」(80 字まで) と「実施日」です。
   - 区分: 点検 / 修理 / 交換 / 清掃 / その他
   - 費用: 0 以上の整数
   - 作業者・業者
   - 計器の値と単位: 走行距離や稼働時間など (単位は `km`、`h` など)
   - 次回予定日: 次の点検日などが決まっていれば入れます。「1 か月後」「3 か月後」「6 か月後」「1 年後」のボタンで、実施日から数えた日付を入れられます
   - メモ、写真
3. 「OK」を押すと保存されます。

:::info
次回予定日は、実施日以降の日付にしてください。次回予定日を入れた記録が、[予定](/t/mmnote/manual/check-dues) に出ます。
:::

## 記録を見る

- 機器の詳細の「記録」に、その機器の記録が並びます。
- 「記録」タブには、すべての機器の記録が新しい順に並び、月ごとに費用の合計が出ます。区分と機器で絞り込み、作業内容・業者・メモで検索できます。

## 直す・削除する

記録を押して開き、「編集」または「削除」を押します。記録を削除すると、その記録の写真も消えます。記録の編集では、機器は変えられません。

## 複製する

毎月の点検のように、同じ内容の記録をくり返し付けるときは、前の記録を複製すると早く済みます。

1. もとにする記録を押して開き、「複製」を押します。
2. 「記録の追加」の画面が、もとの記録の内容が入った状態で開きます。実施日は今日になります。
3. 必要な所を直して、「OK」を押します。

- 引き継がれるもの: 機器、区分、作業内容、費用、作業者・業者、計器の単位、メモ
- 引き継がれないもの: 計器の値、写真
- 次回予定日: もとの記録と同じ間隔で入ります (もとが「実施日の 1 か月後」なら、今日の 1 か月後)。もとの記録に次回予定日が無ければ、空のままです

----- en -----

# Adding records

## Add

1. Open the equipment's details and tap "+" (Add record) in the "Records" heading. You can also add one from the "Records" tab (choose the equipment in the "Equipment" field).
2. Fill in the "Add record" screen. "Work done" (up to 80 characters) and "Date" are required.
   - Type: Inspection / Repair / Replacement / Cleaning / Other
   - Cost: a whole number, 0 or more
   - Done by
   - Meter reading and Unit: mileage, operating hours and so on (units such as `km` or `h`)
   - Next due: enter it if the next inspection date is known. The "In 1 month", "In 3 months", "In 6 months" and "In 1 year" buttons fill in a date counted from the record's date
   - Notes, Photos
3. Tap "OK" to save.

:::info
"Next due" must be on or after the record's date. Records with a next due date appear in the [Due tab](/t/mmnote/manual/check-dues?lang=en).
:::

## View records

- "Records" in the equipment's details lists the records of that equipment.
- The "Records" tab lists the records of all equipment, newest first, with a cost total for each month. Filter by type and equipment, or search the work done, vendor and notes.

## Edit and delete

Tap a record to open it, then tap "Edit" or "Delete". Deleting a record also deletes its photos. The equipment of a record cannot be changed when editing.

## Duplicate

For records you add again and again with the same content, such as a monthly inspection, duplicating an earlier record is quicker.

1. Tap the record you want to start from, then tap "Duplicate".
2. The "Add record" screen opens with the content of that record filled in. The date is set to today.
3. Change what you need and tap "OK".

- Carried over: equipment, type, work done, cost, done by, meter unit, notes
- Not carried over: meter reading, photos
- Next due: filled in with the same interval as the original record (if the original was "1 month after the date", it becomes 1 month from today). If the original has no next due date, it stays empty

===== DOCUMENT =====
type: manual
slug: check-dues
parent: basic-usage
category: null
sortOrder: 2
status: published

----- ja -----

# 予定を確かめる

記録に「次回予定日」を入れておくと、その日付が予定として出ます。

## 予定の決まり

- 予定は、機器ごと・区分ごとに 1 つです。その機器・その区分で、実施日がいちばん新しい記録の「次回予定日」が、いまの予定になります。
- 同じ機器・同じ区分で、より新しい記録を付けると、前の予定は済んだことになります。
- その新しい記録の「次回予定日」が空なら、その区分の予定は無くなります。

## 「予定」タブ

すべての機器の予定が、日付の順に並びます。

- 期限切れ: 予定日を過ぎたもの
- 期限間近: 予定日までの日数が、設定の「期限間近の日数」(はじめは 30 日) 以内のもの
- それ以降

期限切れの件数は、タブにも出ます。機器の一覧と、機器の詳細の「次回予定」でも確かめられます。

## 予定を済ませる

予定の行の「実施を記録」を押すと、機器・区分・作業内容を引き継いだ「記録の追加」の画面が開きます。実施日と、次の「次回予定日」を入れて「OK」を押すと、前の予定が済み、次の予定が出ます。

:::info
通知 (プッシュ通知やメール) は届きません。アプリを開いて確かめてください。
:::

----- en -----

# Checking due dates

When a record has a "Next due" date, that date appears as something due.

## How due dates work

- There is one due date per equipment and type. The "Next due" of the latest record (by date) for that equipment and type is the current one.
- Adding a newer record for the same equipment and type completes the previous due date.
- If "Next due" in that newer record is empty, nothing remains due for that type.

## The "Due" tab

It lists the due dates of all equipment in date order.

- Overdue: the date has passed
- Due soon: within the number of days set in 'Days before "due soon"' in Settings (30 at first)
- Later

The number of overdue items also appears on the tab. You can see due dates in the equipment list and under "Next due" in the equipment's details as well.

## Completing a due item

Tap "Record done" on a due item to open the "Add record" screen with the equipment, type and work done filled in. Enter the date and the following "Next due", then tap "OK". The previous item is completed and the next one appears.

:::info
The app sends no notifications (no push notifications or email). Open the app to check.
:::

===== DOCUMENT =====
type: manual
slug: photos
parent: basic-usage
category: null
sortOrder: 3
status: published

----- ja -----

# 写真を付ける

写真は、機器と記録のそれぞれに、10 枚まで付けられます。

## 追加する

- 機器や記録の入力の画面、または詳細の画面で、「写真を追加」を押します。
- スマートフォンでは、カメラで撮るか、写真ライブラリから選べます。
- 写真は、小さくしてから保存されます (長辺 1600 ピクセルまで)。
- 10 枚を超えた分は取り込まれず、「写真は 10 枚までです。超えた分は取り込みませんでした。」と出ます。

## 見る・削除する

詳細の画面で写真を押すと、大きく表示されます。その画面から削除できます。

## 一覧に出す写真を選ぶ

機器の写真を大きく表示し、「表紙にする」を押すと、その写真が機器の一覧に出ます。

----- en -----

# Adding photos

You can attach up to 10 photos to each piece of equipment and to each record.

## Add

- Tap "Add photos" in the input screen or the detail screen of equipment or a record.
- On a smartphone you can take a photo with the camera or choose from the photo library.
- Photos are reduced before they are saved (up to 1600 pixels on the long edge).
- Photos beyond the limit are not added, and the app shows "Up to 10 photos. The extra ones were not added."

## View and delete

Tap a photo in a detail screen to view it larger. You can delete it from that view.

## Choose the photo shown in the list

View a photo of the equipment and tap "Make cover". That photo is shown in the equipment list.

===== DOCUMENT =====
type: manual
slug: settings
parent: null
category: null
sortOrder: 2
status: published

----- ja -----

# 設定

登録やログインは無いので、アカウントの設定はありません。「設定」タブで、表示とデータの設定ができます。

## 表示

| 項目 | 内容 |
|---|---|
| テーマ | 「端末に合わせる」「ライト」「ダーク」 |
| 拡大率 | 文字と画面の大きさ (50〜200%) |
| 言語 | 「日本語」「English」 |
| 期限間近の日数 | 予定日の何日前から「期限間近」とするか (1〜180 日。はじめは 30 日) |
| 通貨記号 | 費用の前に付ける記号 (はじめは ¥) |

テーマ、拡大率、言語は、画面の右上のボタンでも変えられます。設定は、お使いのブラウザーに保存されます。

## データ

- エクスポート(ZIP)、インポート(ZIP): [データのバックアップと移行](/t/mmnote/manual/backup) をご覧ください。
- サンプルデータを入れる: 機器も記録も無いときだけ押せます。
- すべてのデータを消去: すべての機器・記録・写真と設定を消します。元に戻せません。
- 保存量の目安: いま使っている保存量が出ます。

## サポート

マニュアル、FAQ、リリースノート、お知らせ、お問い合わせ、エラー報告、利用規約、プライバシーポリシーへのリンクです。別のタブで開きます。

## About

バージョン、ソースコード、ライセンス、クレジットが出ます。

----- en -----

# Settings

There is no sign-up or sign-in, so there are no account settings. Display and data settings are in the "Settings" tab.

## Display

| Item | Details |
|---|---|
| Theme | "Match device", "Light" or "Dark" |
| Zoom | The size of text and the screen (50–200%) |
| Language | "日本語" or "English" |
| Days before "due soon" | How many days before the date an item counts as "Due soon" (1–180; 30 at first) |
| Currency symbol | The symbol shown before costs (¥ at first) |

Theme, zoom and language can also be changed with the buttons at the top right. Settings are saved in your browser.

## Data

- Export (ZIP), Import (ZIP): see [Backing up and moving data](/t/mmnote/manual/backup?lang=en).
- Load sample data: available only when there is no equipment and no records.
- Erase all data: erases all equipment, records, photos and settings. This cannot be undone.
- Storage used: shows how much storage is in use.

## Support

Links to the Manual, FAQ, Release notes, News, Contact, Report an error, Terms of use and Privacy policy. They open in a new tab.

## About

Shows the version, source code, license and credits.

===== DOCUMENT =====
type: manual
slug: backup
parent: null
category: null
sortOrder: 3
status: published

----- ja -----

# データのバックアップと移行

データは、お使いの端末のブラウザーの中だけにあります。端末の故障や、ブラウザーのデータの消去で失われることがあるので、定期的にエクスポートしてください。

## エクスポートする

1. 「設定」タブを開きます。
2. 「データ」の「エクスポート(ZIP)」を押します。
3. `mmnote-年月日-時分.zip` という名前の ZIP ファイルが保存されます。機器・記録・写真が入っています。

## インポートする

1. 「設定」タブの「データ」で、「インポート(ZIP)」を押し、エクスポートした ZIP ファイルを選びます。
2. 取り込む件数が出るので、確かめて「OK」を押します。

:::warning
インポートすると、**いまのデータは、すべて置き換わります** (足されるのではありません)。必要なら、先にいまのデータをエクスポートしてください。
:::

## 別の端末に移す

1. 元の端末でエクスポートします。
2. ZIP ファイルを、新しい端末に送ります。
3. 新しい端末でアプリを開き、インポートします。

端末どうしで自動で同期する機能はありません。

## すべてのデータを消す

「設定」タブの「データ」で、「すべてのデータを消去」を押します。すべての機器・記録・写真と設定が消え、元に戻せません。

----- en -----

# Backing up and moving data

Your data exists only in the browser on your device. It can be lost if the device fails or the browser's data is cleared, so export regularly.

## Export

1. Open the "Settings" tab.
2. Tap "Export (ZIP)" under "Data".
3. A ZIP file named `mmnote-date-time.zip` is saved. It contains your equipment, records and photos.

## Import

1. Under "Data" in the "Settings" tab, tap "Import (ZIP)" and choose an exported ZIP file.
2. The app shows how many items will be imported. Check them and tap "OK".

:::warning
Importing **replaces all current data** (it does not add to it). Export your current data first if you need it.
:::

## Move to another device

1. Export on the old device.
2. Send the ZIP file to the new device.
3. Open the app on the new device and import.

There is no automatic sync between devices.

## Erase all data

Tap "Erase all data" under "Data" in the "Settings" tab. All equipment, records, photos and settings are erased and cannot be restored.

===== DOCUMENT =====
type: manual
slug: troubleshooting
parent: null
category: null
sortOrder: 4
status: published

----- ja -----

# 困ったとき

## 画面に出る主なメッセージ

| メッセージ | すること |
|---|---|
| データの保存領域を開けません。プライベートブラウズでは使えないことがあります。 | プライベートブラウズ (シークレットモード) をやめ、通常の画面で開き直してください。 |
| データベースとの接続が切れました。ページを再読込してください。 | 「再読込」を押すか、ページを読み込み直してください。 |
| 別のタブでデータベースが更新されました。ページを再読込してください。 | ページを読み込み直してください。 |
| ZIP ファイルとして読めませんでした。今のデータは変わっていません。 | このアプリでエクスポートした ZIP ファイルを選んでいるかを確かめてください。 |
| このアプリのエクスポートファイルではありません。取り込みを中止しました。 | 同上です。いまのデータは変わっていません。 |
| 写真を読み込めませんでした | ページを読み込み直してください。 |

## データが見当たらない

- 別のブラウザーや別の端末で開いていませんか。データは、保存したときの端末・ブラウザーの中だけにあります。
- iPhone・iPad では、ホーム画面のアプリとブラウザー (Safari) で、保存場所が別です。保存したほうで開いてください。
- iPhone・iPad では、しばらく開かないと、データが消されることがあります。エクスポートした ZIP ファイルがあれば、インポートで戻せます ([データのバックアップと移行](/t/mmnote/manual/backup))。
- ブラウザーの閲覧データ (サイトのデータ) を消すと、アプリのデータも消えます。

## 複数のタブで開いているとき

2 つのタブで同時に開いているときは、片方での変更が、もう片方にも自動で反映され、「別のタブでデータが変更されたので、読み込み直しました」と出ます。

入力の画面を開いている最中は、自動では反映されず、「別のタブでデータが変更されました。ページを再読込してください。」と出ます。入力を済ませてから、ページを読み込み直してください。

## 解決しないとき

[お問い合わせ](/t/mmnote/contact) からご連絡ください。

----- en -----

# Troubleshooting

## Common messages

| Message | What to do |
|---|---|
| Cannot open the data storage. It may not be available in private browsing. | Leave private browsing (incognito) and open the app in a normal window. |
| The database connection was closed. Reload the page. | Tap "Reload" or reload the page. |
| The database was updated in another tab. Reload the page. | Reload the page. |
| Could not read the file as a ZIP. Your data was not changed. | Make sure you chose a ZIP file exported from this app. |
| This is not an export file from this app. Import cancelled. | Same as above. Your current data is unchanged. |
| Could not load the photo | Reload the page. |

## My data is missing

- Are you using a different browser or device? Data exists only in the device and browser where it was saved.
- On iPhone and iPad, the home screen app and the browser (Safari) keep separate data. Open the one you saved in.
- On iPhone and iPad, data may be removed if the app is not opened for a while. If you have an exported ZIP file, you can restore it by importing ([Backing up and moving data](/t/mmnote/manual/backup?lang=en)).
- Clearing the browser's browsing data (site data) also erases the app's data.

## Using several tabs

If the app is open in two tabs at once, changes made in one are applied to the other automatically, and it shows "Data was changed in another tab, so it was reloaded".

While an input screen is open, the change is not applied automatically and the app shows "Data was changed in another tab. Reload the page." Finish your input, then reload the page.

## If the problem persists

Please [contact us](/t/mmnote/contact?lang=en).

===== DOCUMENT =====
type: faq
slug: how-to-start
parent: null
category: getting-started
sortOrder: 0
status: published

----- ja -----

# 使い始めるにはどうすればいいですか?

ブラウザーで https://4each-biz.github.io/mmnote/ を開くだけで使えます。登録やログインは要りません。

1. 「機器」タブの右下の「+」で、機器を登録します。
2. 機器の詳細の「記録」の「+」で、記録を付けます。
3. 「予定」タブで、次回の予定を確かめます。

試しに触るときは、「設定」タブの「サンプルデータを入れる」が使えます。くわしくは [mmnote について](/t/mmnote/manual/introduction) をご覧ください。

----- en -----

# How do I get started?

Just open https://4each-biz.github.io/mmnote/ in your browser. There is no sign-up or sign-in.

1. In the "Equipment" tab, tap "+" at the bottom right to add equipment.
2. In the equipment's details, tap "+" under "Records" to add a record.
3. Check what is due next in the "Due" tab.

To try the app, use "Load sample data" in the "Settings" tab. See [About mmnote](/t/mmnote/manual/introduction?lang=en) for details.

===== DOCUMENT =====
type: faq
slug: home-screen
parent: null
category: getting-started
sortOrder: 1
status: published

----- ja -----

# アプリのようにホーム画面から開けますか?

はい。ブラウザーの「ホーム画面に追加」を使うと、全画面で開けます。

- iPhone / iPad (Safari): 共有ボタン →「ホーム画面に追加」
- Android (Chrome): メニュー →「ホーム画面に追加」または「アプリをインストール」

iPhone・iPad では、ホーム画面のアプリとブラウザーで、データの保存場所が別になります。どちらか一方で使ってください。

----- en -----

# Can I open it from the home screen like an app?

Yes. Use "Add to Home Screen" in your browser to open it full screen.

- iPhone / iPad (Safari): Share button → "Add to Home Screen"
- Android (Chrome): menu → "Add to Home screen" or "Install app"

On iPhone and iPad, the home screen app and the browser keep separate data. Use only one of them.

===== DOCUMENT =====
type: faq
slug: notifications
parent: null
category: getting-started
sortOrder: 2
status: published

----- ja -----

# 予定日が近づくと通知は届きますか?

いいえ。通知 (プッシュ通知やメール) は届きません。

アプリを開くと、期限切れの件数が「予定」タブに出て、機器の一覧にも「期限切れ」「あと ○ 日」のバッジが出ます。何日前から「期限間近」とするかは、「設定」タブの「期限間近の日数」で変えられます。

----- en -----

# Will I be notified when a due date approaches?

No. The app sends no notifications (no push notifications or email).

When you open the app, the number of overdue items appears on the "Due" tab, and the equipment list shows badges such as "Overdue" or "… days left". You can change how early an item counts as "Due soon" with 'Days before "due soon"' in the "Settings" tab.

===== DOCUMENT =====
type: faq
slug: where-is-data
parent: null
category: data
sortOrder: 0
status: published

----- ja -----

# データはどこに保存されますか?

お使いの端末のブラウザーの中だけに保存されます。機器・記録・写真は、どこにも送られません。

そのため、別の端末や別のブラウザーからは見えません。端末の故障などに備えて、「設定」タブの「エクスポート(ZIP)」で、定期的に控えを取ってください ([データのバックアップと移行](/t/mmnote/manual/backup))。

----- en -----

# Where is my data stored?

Only in the browser on your device. Your equipment, records and photos are never sent anywhere.

That means they cannot be seen from another device or browser. To be safe against device failure, back up regularly with "Export (ZIP)" in the "Settings" tab ([Backing up and moving data](/t/mmnote/manual/backup?lang=en)).

===== DOCUMENT =====
type: faq
slug: move-device
parent: null
category: data
sortOrder: 1
status: published

----- ja -----

# 機種変更のとき、データを移せますか?

はい。エクスポートとインポートで移せます。

1. 元の端末の「設定」タブで、「エクスポート(ZIP)」を押します。
2. 保存された ZIP ファイルを、新しい端末に送ります。
3. 新しい端末でアプリを開き、「設定」タブの「インポート(ZIP)」で、その ZIP ファイルを選びます。

インポートすると、新しい端末にあったデータは、すべて置き換わります。

----- en -----

# Can I move my data to a new phone?

Yes, with export and import.

1. On the old device, tap "Export (ZIP)" in the "Settings" tab.
2. Send the saved ZIP file to the new device.
3. Open the app on the new device and choose that ZIP file with "Import (ZIP)" in the "Settings" tab.

Importing replaces all data that was on the new device.

===== DOCUMENT =====
type: faq
slug: delete-data
parent: null
category: data
sortOrder: 2
status: published

----- ja -----

# データを消すにはどうすればいいですか?

「設定」タブの「データ」にある「すべてのデータを消去」を押します。すべての機器・記録・写真と設定が消えます。元に戻せないので、必要なら先にエクスポートしてください。

登録やログインは無いので、退会の手続きはありません。データは端末の中だけにあるため、消去すれば、どこにも残りません (ご自身でエクスポートした ZIP ファイルは別です)。

----- en -----

# How do I delete my data?

Tap "Erase all data" under "Data" in the "Settings" tab. All equipment, records, photos and settings are erased. This cannot be undone, so export first if you need the data.

There is no sign-up or sign-in, so there is no account to delete. Because the data exists only on your device, nothing remains anywhere once it is erased (apart from ZIP files you exported yourself).

===== DOCUMENT =====
type: faq
slug: photo-limit
parent: null
category: data
sortOrder: 3
status: published

----- ja -----

# 写真は何枚まで付けられますか?

機器 1 件につき 10 枚、記録 1 件につき 10 枚までです。

写真は小さくしてから保存されます (長辺 1600 ピクセルまで)。いま使っている保存量は、「設定」タブの「保存量の目安」で確かめられます。

----- en -----

# How many photos can I attach?

Up to 10 per piece of equipment and up to 10 per record.

Photos are reduced before they are saved (up to 1600 pixels on the long edge). You can see how much storage is in use under "Storage used" in the "Settings" tab.

===== DOCUMENT =====
type: faq
slug: data-disappeared
parent: null
category: trouble
sortOrder: 0
status: published

----- ja -----

# 登録したデータが見当たりません

多くは、保存したときと別の場所で開いていることが原因です。次を順に確かめてください。

1. 保存したときと同じ端末・同じブラウザーで開いていますか。
2. iPhone・iPad では、ホーム画面のアプリとブラウザー (Safari) で保存場所が別です。もう一方で開いてみてください。
3. プライベートブラウズ (シークレットモード) で開いていませんか。

iPhone・iPad でしばらく開かなかったときや、ブラウザーの閲覧データを消したときは、データが消えていることがあります。エクスポートした ZIP ファイルがあれば、「インポート(ZIP)」で戻せます。

----- en -----

# The data I entered is missing

Most often the app is open somewhere other than where the data was saved. Check the following in order.

1. Are you using the same device and the same browser as when you saved it?
2. On iPhone and iPad, the home screen app and the browser (Safari) keep separate data. Try opening the other one.
3. Are you in private browsing (incognito)?

If the app was not opened for a while on iPhone or iPad, or the browser's browsing data was cleared, the data may be gone. If you have an exported ZIP file, you can restore it with "Import (ZIP)".

===== DOCUMENT =====
type: faq
slug: due-remains
parent: null
category: trouble
sortOrder: 1
status: published

----- ja -----

# 済ませた予定が、予定の一覧から消えません

同じ機器・同じ区分で、新しい記録を付けると消えます。予定の行の「実施を記録」を押して記録を保存するのが、いちばん簡単です。

予定は、機器ごと・区分ごとに、実施日がいちばん新しい記録の「次回予定日」です。区分が違う記録 (たとえば、「点検」の予定に対して「修理」の記録) を付けても、前の予定は残ります。

----- en -----

# A due item I already did stays in the list

It goes away when you add a newer record for the same equipment and the same type. The easiest way is to tap "Record done" on the due item and save the record.

A due item is the "Next due" of the latest record (by date) for each equipment and type. A record of a different type (for example a "Repair" record for an "Inspection" due item) does not complete it.

===== DOCUMENT =====
type: faq
slug: cannot-save
parent: null
category: trouble
sortOrder: 2
status: published

----- ja -----

# 「データの保存領域を開けません」と出ます

プライベートブラウズ (シークレットモード) では、使えないことがあります。通常の画面で開き直してください。

直らないときは、[お問い合わせ](/t/mmnote/contact) からご連絡ください。

----- en -----

# I see "Cannot open the data storage"

The app may not work in private browsing (incognito). Open it in a normal window.

If that does not help, please [contact us](/t/mmnote/contact?lang=en).

===== DOCUMENT =====
type: faq
slug: contact
parent: null
category: trouble
sortOrder: 3
status: published

----- ja -----

# 問い合わせ先を教えてください

[お問い合わせフォーム](/t/mmnote/contact) からご連絡ください。アプリの「設定」タブの「サポート」にある「お問い合わせ」からも開けます。

返信の目安は、翌営業日です。受け付けている時間は、平日の 10:00〜17:00 です。

----- en -----

# How can I contact support?

Please use the [inquiry form](/t/mmnote/contact?lang=en). You can also open it from "Contact" under "Support" in the app's "Settings" tab.

We usually reply by the next business day. Support hours are weekdays, 10:00–17:00.

===== DOCUMENT =====
type: terms
slug: terms
parent: null
category: null
sortOrder: 0
status: published

----- ja -----

# 利用規約

:::info
mmnote はサンプルのプロジェクトです。このページは、サンプルとして提供しているものです。
:::

:::warning
この文書は下書きです。雛形から作ったもので、内容の正しさや法令への適合は、system-support の運営者によって確かめられておらず、保証されていません。内容の確認と公開は、このサービスの運営者であるご自身の責任で行ってください。必要に応じて専門家に相談してください。(公開する前に、この注意書きを消してください)
:::

本規約は、mmnote (以下「本サービス」) の提供者である株式会社フォーイーチ (以下「当社」) と、本サービスを利用するお客様 (以下「ユーザー」) との間に適用されます。

## 第1条 (適用)

本規約は、本サービスの利用に関わる一切の関係に適用されるものとします。ユーザーは、本サービスを利用することにより本規約に同意したものとみなされます。

## 第2条 (利用登録)

本サービスの利用登録は、Google または Apple のアカウントでログインすることによって行います。当社は、登録の申請が公序良俗に反すると判断した場合、登録を承認しないことがあります。

## 第3条 (利用料金と支払い)

本サービスの有料プランの料金は、販売ページに表示します。支払いは、PayPal のサブスクリプションによって行い、有料プランの申し込みのときに支払うものとします。有料プランを解約したあとも、次の更新の期限までは、有料プランを利用できます。支払い済みの料金は、返金しません。

## 第4条 (禁止事項)

ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。

- 法令または公序良俗に違反する行為
- 犯罪行為に関連する行為
- 当社、他のユーザー、または第三者の知的財産権・肖像権・プライバシー・名誉その他の権利または利益を侵害する行為
- 本サービスのネットワークまたはシステム等に過度な負荷をかける行為
- 本サービスの運営を妨害するおそれのある行為
- 不正アクセスをし、またはこれを試みる行為
- その他、当社が不適切と判断する行為

## 第5条 (本サービスの提供の停止等)

当社は、以下のいずれかに該当する場合、本サービスの全部または一部の提供を停止または中断することがあります。

- 通常または緊急のメンテナンスを行う場合
- 本サービスが利用している外部のサービスが停止している場合
- その他、当社が必要と認める場合

## 第6条 (免責事項)

当社は、本サービスに事実上または法律上の瑕疵 (安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティ等に関する欠陥、エラーやバグ、権利侵害等を含みます) がないことを明示的にも黙示的にも保証しておりません。

当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。

有料プランについて当社が責任を負う場合、賠償の額は、当社がユーザーから受け取った利用料の額を上限とします。

## 第7条 (サービス内容の変更等)

当社は、ユーザーへの事前の告知なしに、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。

## 第8条 (利用規約の変更)

当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、本サービス上に表示した時点より効力を生じるものとします。

## 第9条 (準拠法・裁判管轄)

本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄とします。

## 第10条 (お問い合わせ)

本サービスに関するお問い合わせは [お問い合わせフォーム](/t/mmnote/contact) よりご連絡ください。

制定日: 2026年11月22日

----- en -----

# Terms of Service

:::info
mmnote is a sample project. This page is provided as a sample.
:::

:::warning
This document is a draft. It was made from a template; the operator of system-support has not verified its accuracy or its compliance with the law and does not guarantee it. Checking the content and publishing it are your own responsibility as the operator of this service. Consult a professional where needed. (Delete this notice before publishing.)
:::

These Terms of Service ("Terms") apply between foreach ltd. ("we", "us"), the provider of mmnote ("the Service"), and the customers who use the Service ("you").

## Article 1 (Scope)

These Terms apply to all matters relating to the use of the Service. By using the Service, you are deemed to have agreed to these Terms.

## Article 2 (Registration)

You register for the Service by signing in with a Google or Apple account. We may decline a registration if we consider it contrary to public order and morals.

## Article 3 (Fees and payment)

The fees for the paid plan of the Service are shown on the sales page. Payment is made through a PayPal subscription, at the time you apply for the paid plan. After you cancel the paid plan, you can keep using it until the next renewal date. Fees already paid are not refunded.

## Article 4 (Prohibited conduct)

In using the Service, you must not:

- violate laws or public order and morals;
- engage in conduct related to criminal acts;
- infringe the intellectual property rights, portrait rights, privacy, reputation, or other rights or interests of us, other users, or third parties;
- place an excessive load on the network or systems of the Service;
- interfere, or risk interfering, with the operation of the Service;
- gain or attempt to gain unauthorized access;
- engage in any other conduct we deem inappropriate.

## Article 5 (Suspension of the Service)

We may suspend or interrupt all or part of the Service in any of the following cases.

- When we carry out scheduled or emergency maintenance
- When an external service that the Service relies on is unavailable
- In any other case where we consider it necessary

## Article 6 (Disclaimer)

We make no warranty, express or implied, that the Service is free from defects in fact or in law (including defects relating to safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, or security, as well as errors, bugs, and infringement of rights).

We are not liable for any damage you incur arising from the Service, except in cases of our willful misconduct or gross negligence.

Where we are liable in connection with the paid plan, our liability is limited to the amount of the fees we have received from you.

## Article 7 (Changes to the Service)

We may change, add to, or discontinue the content of the Service without prior notice, and you accept this.

## Article 8 (Changes to these Terms)

We may change these Terms at any time without notifying you when we consider it necessary. The changed Terms take effect when they are displayed on the Service.

## Article 9 (Governing law and jurisdiction)

These Terms are governed by the laws of Japan. Any dispute relating to the Service is subject to the exclusive jurisdiction of the court having jurisdiction over the location of our head office as the court of first instance.

## Article 10 (Contact)

For questions about the Service, please use the [inquiry form](/t/mmnote/contact?lang=en).

Effective date: 2026-11-22

===== DOCUMENT =====
type: privacy
slug: privacy
parent: null
category: null
sortOrder: 0
status: published

----- ja -----

# プライバシーポリシー

:::info
mmnote はサンプルのプロジェクトです。このページは、サンプルとして提供しているものです。
:::

:::warning
この文書は下書きです。雛形から作ったもので、内容の正しさや法令への適合は、system-support の運営者によって確かめられておらず、保証されていません。内容の確認と公開は、このサービスの運営者であるご自身の責任で行ってください。必要に応じて専門家に相談してください。(公開する前に、この注意書きを消してください)
:::

本ポリシーは、mmnote (以下「本サービス」) を提供する株式会社フォーイーチ (以下「当社」) による、お客様 (以下「ユーザー」) の個人情報の取扱いについて定めるものです。

## 1. 取得する情報

当社は、本サービスの提供にあたり、以下の情報を取得することがあります。

- 登録のときに取得する情報 (氏名、メールアドレス)
- Google または Apple のアカウントでログインするときに、各社から受け取る情報 (メールアドレス、表示名、アカウントの識別子)
- 決済に関する情報 (PayPal による決済に必要な情報)
- アクセスログ、Cookie 等の技術情報

ユーザーが本サービスに入力した機器・記録・写真は、ユーザーの端末のブラウザーの中だけに保存され、当社は取得しません。

## 2. 利用目的

取得した個人情報は、以下の目的のために利用します。

- 本サービスの提供・維持・改善のため
- ユーザーの本人確認と、ログインの状態の管理のため
- ユーザーからのお問い合わせに対応するため
- 利用規約に違反する行為への対応のため
- 上記利用目的に付随する目的のため

## 3. 第三者提供

当社は、以下の場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供しません。

- 法令に基づく場合
- 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき

## 4. Cookie の利用

本サービスは、本サービスの機能の提供のために Cookie を利用することがあります。ブラウザの設定により Cookie の利用を拒否することができますが、その場合、本サービスの一部機能がご利用いただけない場合があります。

## 5. 個人情報の開示・訂正・削除

ユーザーは、当社が保有する自己の個人情報について、開示・訂正・削除等を求めることができます。ご希望の場合は [お問い合わせフォーム](/t/mmnote/contact) よりご連絡ください。

## 6. プライバシーポリシーの変更

本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。

## 7. お問い合わせ窓口

本ポリシーに関するお問い合わせは [お問い合わせフォーム](/t/mmnote/contact) よりご連絡ください。当社の名称・所在地・代表者は [運営会社](/t/mmnote/company) のページに記載しています。

制定日: 2026年11月22日

----- en -----

# Privacy Policy

:::info
mmnote is a sample project. This page is provided as a sample.
:::

:::warning
This document is a draft. It was made from a template; the operator of system-support has not verified its accuracy or its compliance with the law and does not guarantee it. Checking the content and publishing it are your own responsibility as the operator of this service. Consult a professional where needed. (Delete this notice before publishing.)
:::

This Privacy Policy ("Policy") describes how foreach ltd. ("we", "us"), the provider of mmnote ("the Service"), handles the personal information of its customers ("you").

## 1. Information we collect

In providing the Service, we may collect the following information.

- Information collected at registration (name, email address)
- Information we receive from Google or Apple when you sign in with a Google or Apple account (email address, display name, account identifier)
- Payment-related information (the information required for payment through PayPal)
- Technical information such as access logs and cookies

The equipment, records and photos you enter in the Service are stored only in the browser on your device, and we do not collect them.

## 2. Purposes of use

We use the personal information we collect for the following purposes.

- To provide, maintain, and improve the Service
- To verify your identity and manage your sign-in state
- To respond to your inquiries
- To respond to conduct that violates the Terms of Service
- For purposes incidental to the above

## 3. Provision to third parties

We do not provide personal information to third parties without your prior consent, except in the following cases.

- When required by law
- When necessary to protect a person's life, body, or property and it is difficult to obtain the person's consent

## 4. Cookies

The Service may use cookies for providing the features of the Service. You can refuse cookies in your browser settings, but some features of the Service may then be unavailable.

## 5. Access, correction, and deletion

You may request access to, correction of, or deletion of your personal information that we hold. To do so, please use the [inquiry form](/t/mmnote/contact?lang=en).

## 6. Changes to this Policy

Except where laws or this Policy provide otherwise, we may change this Policy without notifying you.

## 7. Contact

For questions about this Policy, please use the [inquiry form](/t/mmnote/contact?lang=en). Our name, address, and representative are listed on the [Company](/t/mmnote/company?lang=en) page.

Effective date: 2026-11-22

===== DOCUMENT =====
type: company
slug: company
parent: null
category: null
sortOrder: 0
status: published

----- ja -----

# 運営会社

:::info
mmnote はサンプルのプロジェクトです。このページは、サンプルとして提供しているものです。
:::

:::warning
この文書は下書きです。雛形から作ったもので、内容の正しさや法令への適合は、system-support の運営者によって確かめられておらず、保証されていません。内容の確認と公開は、このサービスの運営者であるご自身の責任で行ってください。必要に応じて専門家に相談してください。(公開する前に、この注意書きを消してください)
:::

## 運営者の概要

| 項目 | 内容 |
|---|---|
| 名称 | 株式会社フォーイーチ |
| 所在地 | 〒111-0056 東京都台東区小島2-14-5 毛利ビル401 |
| 代表者 | 代表取締役 田村 充 |
| 設立 | 2002年7月 |
| 事業内容 | ソフトウェア開発、コンサルティング |
| Web サイト | https://4each.biz/ |

## お問い合わせ

本サービスに関するお問い合わせは [お問い合わせフォーム](/t/mmnote/contact) よりご連絡ください。

## 特定商取引法に基づく表記

| 項目 | 内容 |
|---|---|
| 販売業者 | 株式会社フォーイーチ |
| 運営責任者 | 品田 一郎 |
| 所在地 | 〒111-0056 東京都台東区小島2-14-5 毛利ビル401 |
| 電話番号 | 03-5809-3322 (平日 10:00〜17:00) |
| メールアドレス | info@4each.biz |
| 販売価格 | 販売ページに表示します (税込み) |
| 商品代金以外の必要料金 | ありません |
| 支払方法 | PayPal |
| 支払時期 | 有料プランの申し込みのとき |
| 提供時期 | 2027年4月1日 |
| 返品・キャンセル | 解約したあとも、次の更新の期限まで利用できます。返金はしません。 |

----- en -----

# Company Information

:::info
mmnote is a sample project. This page is provided as a sample.
:::

:::warning
This document is a draft. It was made from a template; the operator of system-support has not verified its accuracy or its compliance with the law and does not guarantee it. Checking the content and publishing it are your own responsibility as the operator of this service. Consult a professional where needed. (Delete this notice before publishing.)
:::

## About the operator

| Item | Details |
|---|---|
| Name | foreach ltd. (株式会社フォーイーチ) |
| Address | 〒111-0056 東京都台東区小島2-14-5 毛利ビル401 |
| Representative | 代表取締役 田村 充 |
| Founded | July 2002 |
| Business | Software development, consulting |
| Website | https://4each.biz/ |

## Contact

For inquiries about the Service, please use the [inquiry form](/t/mmnote/contact?lang=en).

## Notation based on the Act on Specified Commercial Transactions

| Item | Details |
|---|---|
| Seller | foreach ltd. (株式会社フォーイーチ) |
| Person in charge | 品田 一郎 |
| Address | 〒111-0056 東京都台東区小島2-14-5 毛利ビル401 |
| Phone number | 03-5809-3322 (weekdays, 10:00–17:00) |
| Email address | info@4each.biz |
| Price | Shown on the sales page (including tax) |
| Charges other than the price | None |
| Payment method | PayPal |
| Payment timing | When you apply for the paid plan |
| Time of delivery | April 1, 2027 |
| Returns and cancellation | After cancelling, you can keep using the service until the next renewal date. No refunds are given. |
