import vendors from './vendor/vendors'
const vendorName = 'zijing';
if(!vendors[vendorName]) throw new Error(`[Config] Not found vendorName equal to ${vendorName}`)
const config = {
  logoPath: vendors[vendorName].logoPath,
  copyRight: vendors[vendorName].copyRight,
  apiServer: vendors[vendorName].apiServer
}
export default config

/********
打包小程序步骤：
1. 更改 vendorName
2. 运行 wepy build --watch
3. 打开微信开发者工具对应项目
4. 确认无误后上传代码。
注，每个客户的小程序需要单独起一个项目，因为APPID保存于微信开发者工具的项目中。*/
