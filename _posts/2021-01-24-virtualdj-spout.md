---
layout: post
title: VirtualDJで動画ファイルの読み込み時にSPOUTの出力がカクつく，出力サイズがおかしいなど
author: "カニぱん"
---

## 概要
タイトルの通り，SPOUTのプラグインを使用して再生中の状態で別のデッキに動画ファイルをロードすると，再生中の映像がカクついて困っていた．  
最初は動画ファイルがデカいのが悪いのかと思い，SSDに動画を移したり，コーデックを変えてみたりしたが解決には至らなかった．

## 環境
VirtualDJ 8  
VDJSpoutSender64.dll→[https://github.com/leadedge/SpoutVDJ/releases/](https://github.com/leadedge/SpoutVDJ/releases/)  
Windows10  
core i7-6700HQ,GTX 965MなノートPC

## 解決方法
VirtualDJのオプションから，**performance > mathEngine**  
この設定が**GPU**になっていたため，**CPU**に変更  
この方法であっさり解決したので正直拍子抜けした．
今の所この現象は再発していない．

また，2つ目の出力サイズがおかしい，という問題についてだが，  
Spoutのプラグイン(エフェクト)を中央のマスターデッキで有効にした場合，Spoutの出力サイズはVideoウィンドウのサイズになる．  

そのため，他のソフトを経由して映像出すからVideoウィンドウが邪魔！！！！となる場合，  
HDMIダミープラグ[こういうやつです](https://www.amazon.co.jp/s?k=HDMI+%E3%83%80%E3%83%9F%E3%83%BC%E3%83%97%E3%83%A9%E3%82%B0)を使うと幸せになれる．  
それぞれのデッキで有効にしたSpoutSenderからは，動画ファイルと同じ解像度の映像が出力される．

ググっても同様の現象が出てこなくて困ったので(探し方が悪いだけかもしれない)，このような記事を書いた．  
誰かの助けになれば幸いです
