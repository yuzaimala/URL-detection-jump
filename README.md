# URL 可用性检测中间页

![1707329936725.png](https://cdn-fusion.imgimg.cc/i/2024/egMJCAJnMpCdF3aj.png)


功能：同时向全部URL发起请求，并将在倒计时结束后跳转到第一个访问成功的URL


特性：URL使用base64编码，减少特征

Telegram联系我：[@bobozhi](https://t.me/bobozhi "@bobozhi")

## 使用方法

 修改 js/app.38b00fb0.js 文件，修改第43行填入base64编码后的URL

    const n = ["YmFpZHUuY29t", "YmFpZHUuY29t"],


## 支持传递路径和参数

例如：


访问 http://localhost.com/#/sign-up?code=888888

最后跳转到 http://url1.com/#/sign-up?code=888888


访问 http://localhost.com/index.php?code=888888

最后跳转到 http://url1.com/index.php?code=888888