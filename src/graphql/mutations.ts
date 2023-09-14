/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createOwner = /* GraphQL */ `
  mutation CreateOwner(
    $input: CreateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    createOwner(input: $input, condition: $condition) {
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
export const updateOwner = /* GraphQL */ `
  mutation UpdateOwner(
    $input: UpdateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    updateOwner(input: $input, condition: $condition) {
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
export const deleteOwner = /* GraphQL */ `
  mutation DeleteOwner(
    $input: DeleteOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    deleteOwner(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
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
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
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
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
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
