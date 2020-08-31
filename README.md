# README

# Daily Work Schedule Maker
DWSMは、実店舗営業における、チームスケジュール作成アプリケーション。

# URL
http://176.32.95.183/

# ACCOUNT
テスト用アカウント  
・メールアドレス:test@test  
・パスワード:test123  

# DEMO
[![Image from Gyazo](https://i.gyazo.com/85dbdf6b23aee9bf07f75c1d08af9033.gif)](https://gyazo.com/85dbdf6b23aee9bf07f75c1d08af9033)

# 機能一覧
・店舗登録・ログイン・ログアウト機能  
・店舗スタッフ登録・編集機能  
・チームスケジュール作成機能  
・タスク作成機能  

# 課題解決
・実店舗営業における資源の削減  
・データ化による、共有力の向上  

# 開発環境
・Haml  
・SCSS  
・Ruby  
・Ruby on Rails  
・javascript  
・Jquery
・Rspec    
・GitHub  
・Mysql  
・AWS  

# USAGE
1:サインアップ  
2:スタッフ登録(名前とランクを登録)  
3:ヘッダーメニュー「DWS作成」からスケジュール作成。  
4:画面左側のタスクボタンを押下。出現したタスクをスケジュール欄にドラッグ。タスクは伸縮が可能で、直感的且つフレキシブルなスケジュール生成が可能。  
5:「タスクを作る」ボタンからタスクの生成が可能。

# ローカル動作方法

## バージョン

Ruby 2.6.5  
Ruby on Rails 6.0.3.2  

## 動作までのコマンド
git clone https://github.com/sinjinrui/DWSM.git  
bundle install  
yarn install  
rails db:create  
rails db:migrate  
rails s  

# 追加実装要件
・レスポンシブ対応  
・グループ作成及び、グループ内での人員ヘルプ要請・応対機能  
・グループ内での情報共有、ノウハウ投稿機能（Active Storage・S3導入）  
・Action Mailerを用いた独自問い合わせフォーム  
・スケジュールテンプレート保存機能  