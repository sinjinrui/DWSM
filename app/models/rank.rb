class Rank < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: 'トレーニー'},
    { id: 3, name: 'チャレンジャーC' },
    { id: 4, name: 'チャレンジャーB'},
    { id: 5, name: 'チャレンジャーA'},
    { id: 6, name: 'シフトリーダー'},
    { id: 7, name: 'トレーナー'},
    { id: 8, name: 'スイングマネージャー'},
    { id: 9, name: '社員'}
  ]
end
