
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'ivanna',
  applicationName: 'todo-list',
  appUid: 'DvZ47sv8gqtMyPX1Xc',
  orgUid: '82ba7413-2ede-431a-b225-eb312116b0d9',
  deploymentUid: 'a19436d3-9660-4866-a3e4-4d1dddd8300a',
  serviceName: 'slsTestNode',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'slsTestNode-dev-createTodo', timeout: 6 };

try {
  const userHandler = require('./src/handlers/create-todo.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}