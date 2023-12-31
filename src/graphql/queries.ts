/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      type
      address
      description
      rooms {
        items {
          type
          description
          id
          createdAt
          updatedAt
          propertyRoomsId
          __typename
        }
        nextToken
        __typename
      }
      features {
        items {
          type
          description
          id
          createdAt
          updatedAt
          propertyFeaturesId
          __typename
        }
        nextToken
        __typename
      }
      owner {
        name
        email
        phone
        properties {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      id
      createdAt
      updatedAt
      ownerPropertiesId
      __typename
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        address
        description
        rooms {
          nextToken
          __typename
        }
        features {
          nextToken
          __typename
        }
        owner {
          name
          email
          phone
          id
          createdAt
          updatedAt
          __typename
        }
        id
        createdAt
        updatedAt
        ownerPropertiesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
      name
      email
      phone
      properties {
        items {
          type
          address
          description
          id
          createdAt
          updatedAt
          ownerPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOwners = /* GraphQL */ `
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        phone
        properties {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      type
      description
      id
      createdAt
      updatedAt
      propertyRoomsId
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        description
        id
        createdAt
        updatedAt
        propertyRoomsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
      type
      description
      id
      createdAt
      updatedAt
      propertyFeaturesId
      __typename
    }
  }
`;
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        description
        id
        createdAt
        updatedAt
        propertyFeaturesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
