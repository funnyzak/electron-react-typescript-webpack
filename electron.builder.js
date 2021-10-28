const packageInfo = require('./package.json');

module.exports = {
  appId: 'github.funnyzak.electron',
  productName: packageInfo.name,
  copyright: 'copyright © 2021 eric',
  asar: true,
  // 要打包进的资源  glob Patterns
  files: ['build/bundle/**/*'],
  // 二进制打包输出
  directories: {
    // 二进制打包资源文件夹，如果修改，请和app.config.js中「distOutPut」保持一致，对应也修改 package.json=> main入口文件
    buildResources: 'build/bundle',
    // 二进制输出文件夹
    output: 'build/binary'
  },
  mac: {
    icon: 'public/icon/128x128.icns',
    category: 'Utility'
  },
  nsis: {
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    installerIcon: 'public/icon/256x256.ico',
    uninstallerIcon: 'public/icon/256x256.ico',
    installerHeaderIcon: 'public/icon/256x256.ico',
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: 'electron quick start'
  },
  win: {
    icon: 'public/icon/256x256.ico',
    target: [
      {
        target: 'nsis',
        arch: ['x64', 'ia32']
      }
    ]
  },
  linux: {
    target: 'zip',
    category: 'Utility',
    icon: 'public/icon/128x128.ico'
  }
};
