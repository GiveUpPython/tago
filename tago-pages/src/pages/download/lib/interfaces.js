export default {
  // util封装的可以请求的地址列表
  interfaces: {
    'domain': '/api',
    'files': '/services/credential/files', // 上传图片
    'signers': '/signers', // 获取所有签主信息
    'signer': '/signer', // 获取签主信息
    'credentials': '/signers/credentials', // 认证
    'banks': '/banks', // 认证选择银行
    'coupons': '/coupons', // 创建优惠券
    'discounts': '/events/discounts', // 优惠折扣列表
    'usable': '/signer/coupons/usable', // 签主发布的优惠券列表（可用）
    'unusable': '/signer/coupons/unusable', // 签主发布的优惠券列表（不可用）
    'tagos': '/tagos', // 发布标签
    'tag_header': '/signer/tagos?status=', // 标签列表
    'challenges': '/challenges', // 发布挑战
    'levelMaps': '/challenges/levels', // 挑战等级
    'ticksThis': '/ticks/times', // tick时间
    'account': '/challenges?status=', // 挑战列表
    'accountList': '/signer/challenges?status=', // 挑战列表
    'events': '/events', // 发布活动
    'is_recommend': '/event/types?is_recommend=1', // 活动类型
    'activities': '/events?status=', // 活动列表
    'activitiesList': '/signer/events?status=', // 活动列表
    'clocks': '/clocks', // 发布打卡
    'internally': '/clocks?status=', // 打卡列表
    'internallyList': '/signer/clocks?status=', // 打卡列表
    'tests': '/tests', // 发布测试
    'testing': '/tests?status=', // 测试列表
    'testingList': '/signer/tests?status=', // 测试列表
    'posts': '/signer/posts', // 发布动态
    'wallet': '/user/wallet', // 当前用户的钱包
    'bills': '/user/bills', // 账单明细
    'register_sms': '/signer?include=notifications,sms', // 签主短信账户信息
    'purchase_btn': '/signer/sms/orders', // 签主短信购买记录
    'rxrpc_message': '/signer/sms', // 短信历史
    'messages': '/products/sms', // 短信包列表
    'userPurchases': '/trades/sms/orders', // 购买短信
    'groups': '/signer/groups', // 群列表
    'texting': '/sms/records', // 发送短信
    'cashes': '/user/wallet/cashes', // 钱包提现
    'dynamic': '/signers/', // 签主动态
    'settings': '/signer/settings', // 修改签主封面图
    'likes': '/moments/', // 点赞
    'dynamicDetails': '/moments/', // 动态详情
    'commentsCtrl': '/moments/', // 评论
    'comments': '/comments/', // 删除评论
    'bulletins': '/bulletins', // 发送签快讯
    'notifcations': '/signer/moments/unread/notifications', // 签主动态消息
    'clearnotifcations': '/signer/moments/clear/notifications', // 清空签主动态消息
    'shares': '/shares/', // 分享
    'task': '/task/', // 标签添加条件
    'couponsLists': '/signer/coupons/lists?status=usable', // 编辑标签优惠券列表
    'reasons': '/order/reasons', // 退款拒绝说明
    'versions': '/apps/versions?type=', // 下载链接
    'orders': '/signer/event/orders?status=', // 退款
    'cancel_order': '/trades/orders/', // 订单详情
    'payments': '/trades/payments/', // 预支付
    'qrcodes': '/qrcodes?text=', // 扫码结果
    'positions': '/positions/8?include=events,challenges,clocks,tests', // Tago推荐位
    'cities': '/cities/leagues', // 城市加盟
    'notices': '/signer/notice/notifications', // 活动报名通知
    'reminds': '/signer/remind/notifications', // 提醒通知
    'delnotices': '/signer/remind/notices', // 清空消息
    'getcities': '/cities/',
    'getapps': '/apps/versions?' // 获取下载地址
  }
}
