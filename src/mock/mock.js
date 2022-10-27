const Mock = require('mockjs')

const connectionTest = function () {
  // 接口文档中的模拟数据直接整个复制到这个位置
  return JSON.stringify('Connection OK')
}

Mock.mock('/', 'GET', connectionTest)

const upload = function (options) {
  console.log(options)
  return JSON.stringify({
    'code': 1,
    'msg': 'no info',
    'file_path': '/path'
  })
}

Mock.mock('/upload', 'POST', upload)
