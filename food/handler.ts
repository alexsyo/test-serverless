import { APIGatewayProxyHandler } from 'aws-lambda';
import { makeResponse } from '../lib/http';

export const index: APIGatewayProxyHandler = async (event, context) => 
  makeResponse(200, [
    'pepper',
    'salt',
    'cinnamon'
  ])

export const show: APIGatewayProxyHandler = async (event, context) =>
  makeResponse( 
    200,
    `resource -> ${event.pathParameters.id}`
  )
