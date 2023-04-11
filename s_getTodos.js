
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'ivanna',
  applicationName: 'aws-node-http-api',
  appUid: 'bFLcNLt67MHwc2Dfpz',
  orgUid: '82ba7413-2ede-431a-b225-eb312116b0d9',
  deploymentUid: '582ad018-951c-4c50-b04a-67fa69bee483',
  serviceName: 'slsTestNode',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'prod',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'slsTestNode-prod-getTodos', timeout: 6 };

try {
  const userHandler = require('./src/handlers/get-todos.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}