/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onCreateProperty(filter: $filter) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onUpdateProperty(filter: $filter) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onDeleteProperty(filter: $filter) {
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
export const onCreateOwner = /* GraphQL */ `
  subscription OnCreateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onCreateOwner(filter: $filter) {
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
export const onUpdateOwner = /* GraphQL */ `
  subscription OnUpdateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onUpdateOwner(filter: $filter) {
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
export const onDeleteOwner = /* GraphQL */ `
  subscription OnDeleteOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onDeleteOwner(filter: $filter) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onCreateFeature(filter: $filter) {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onUpdateFeature(filter: $filter) {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onDeleteFeature(filter: $filter) {
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
