//import axios from 'axios';
import { createFlex, createReply } from '../utils/flex';
const axios = require('axios');

const MAIN_URL = 'https://ypyfp8e61f.execute-api.ap-southeast-1.amazonaws.com/development/v1/graphql';

const GET_TRAVEL_ROUTES = `{
  travelRoutes(
    type: "getAll",
    params: {}
  ) {
    routeId,
    moduleOriginId,
    moduleDestinationId,
    origin,
    destination,
    originType,
    destinationType,
    isPopular,
        masterOrigin {
          routeId
          routeValue
          routeType
          isActive
        },
    masterDestination {
      routeId
      routeValue
      routeType
      isActive
    }
  }
}`

const POST_TRAVEL_ORDER = `{}`

async function getMessageReply() {
  let result;
  try {
    result = await axios({
      url: MAIN_URL,
      method: 'post',
      data: {
        query: GET_TRAVEL_ROUTES
      }
    })
  } catch (error) {
    throw new Error(error);
  }
  return createReply(result.data.data.travelRoutes);
}

async function getTravelRoutes() {
  let result;
  try {
    result = await axios({
      url: MAIN_URL,
      method: 'post',
      data: {
        query: GET_TRAVEL_ROUTES
      }
    })
  } catch (error) {
    throw new Error(error);
  }
  return createFlex(result.data.data.travelRoutes, 'Silahkan pilih tujuan Anda!');
}

async function getTravelRoutesLenght() {
  let result;
  try {
    result = await axios({
      url: MAIN_URL,
      method: 'post',
      data: {
        query: GET_TRAVEL_ROUTES
      }
    })
  } catch (error) {
    throw new Error(error);
  }
  return console.log(result.data.data.travelRoutes, 'Silahkan pilih tujuan Anda!');
}

export {
  getTravelRoutes,
  getMessageReply
}

//let route = GET_TRAVEL_ROUTES.travelRoutes;
//console.log(route);