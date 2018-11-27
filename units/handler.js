'use strict';

module.exports.index = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      'gigi',
      'franco',
      'pippo'
    ]),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.show = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify('unit ' + event.pathParameters.id),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
