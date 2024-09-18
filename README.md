# URL 可用性检测中间页

![1726688910768](images/README/1726688910768.png)

## 功能

同时向全部URL发起请求,并在倒计时结束后跳转到第一个访问成功的URL。

## 特性

- 并发测试可用性,高效
- 支持传递路径和参数,方便

## 联系方式

Telegram: [@pmzhizhi_bot](https://t.me/pmzhizhi_bot)

## 使用方法

1. 修改 `config.json` 文件,配置检测参数:

配置说明:

- `welcomeTitle`: 设置欢迎页面的标题文字
- `urls`: 数组,包含需要检测的URL列表

2. 将修改后的 `config.json` 文件和其他项目文件一起部署到您的服务器上。
3. 访问部署后的网址,系统将自动检测并跳转到可用的URL。

注意事项:

- 确保所有URL都使用完整格式,包括 `http://` 或 `https://` 前缀。
- **重要:** 跳转的网站需要支持CORS跨域访问。如果目标网站不支持跨域,则无法进行可用性检测和自动跳转。

## 支持传递路径和参数

示例:

| 访问地址                                     | 最终跳转地址                                 |
| -------------------------------------------- | -------------------------------------------- |
| `http://localhost.com/#/sign-up?code=888888` | `https://example1.com/#/sign-up?code=888888` |
| `http://localhost.com/index.php?code=888888` | `https://example2.org/index.php?code=888888` |

