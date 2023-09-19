/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertyInput = {
  type: PropertyType,
  address: string,
  description?: string | null,
  id?: string | null,
  ownerPropertiesId?: string | null,
};

export enum PropertyType {
  HOUSE = "HOUSE",
  APARTMENT = "APARTMENT",
  CABIN = "CABIN",
  CAMPER = "CAMPER",
}


export type ModelPropertyConditionInput = {
  type?: ModelPropertyTypeInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
  ownerPropertiesId?: ModelIDInput | null,
};

export type ModelPropertyTypeInput = {
  eq?: PropertyType | null,
  ne?: PropertyType | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Property = {
  __typename: "Property",
  type: PropertyType,
  address: string,
  // > I want to be able to describe the property in some level detail (don't worry about photos for now)
  description?: string | null,
  rooms?: ModelRoomConnection | null,
  features?: ModelFeatureConnection | null,
  owner: Owner,
  id: string,
  createdAt: string,
  updatedAt: string,
  ownerPropertiesId?: string | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type Room = {
  __typename: "Room",
  type: RoomType,
  description?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  propertyRoomsId: string,
};

export enum RoomType {
  BEDROOM = "BEDROOM",
  BATHROOM = "BATHROOM",
  KITCHEN = "KITCHEN",
  LIVING_ROOM = "LIVING_ROOM",
}


export type ModelFeatureConnection = {
  __typename: "ModelFeatureConnection",
  items:  Array<Feature | null >,
  nextToken?: string | null,
};

export type Feature = {
  __typename: "Feature",
  type: FeatureType,
  description?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  propertyFeaturesId: string,
};

export enum FeatureType {
  WIFI = "WIFI",
  PARKING = "PARKING",
  TV = "TV",
  KITCHEN = "KITCHEN",
  WASHER = "WASHER",
  AIR_CONDITIONING = "AIR_CONDITIONING",
}


export type Owner = {
  __typename: "Owner",
  name: string,
  email: string,
  phone: string,
  properties?: ModelPropertyConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type UpdatePropertyInput = {
  type?: PropertyType | null,
  address?: string | null,
  description?: string | null,
  id: string,
  ownerPropertiesId?: string | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateOwnerInput = {
  name: string,
  email: string,
  phone: string,
  id?: string | null,
};

export type ModelOwnerConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelOwnerConditionInput | null > | null,
  or?: Array< ModelOwnerConditionInput | null > | null,
  not?: ModelOwnerConditionInput | null,
};

export type UpdateOwnerInput = {
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  id: string,
};

export type DeleteOwnerInput = {
  id: string,
};

export type CreateRoomInput = {
  type: RoomType,
  description?: string | null,
  id?: string | null,
  propertyRoomsId: string,
};

export type ModelRoomConditionInput = {
  type?: ModelRoomTypeInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
  propertyRoomsId?: ModelIDInput | null,
};

export type ModelRoomTypeInput = {
  eq?: RoomType | null,
  ne?: RoomType | null,
};

export type UpdateRoomInput = {
  type?: RoomType | null,
  description?: string | null,
  id: string,
  propertyRoomsId?: string | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateFeatureInput = {
  type: FeatureType,
  description?: string | null,
  id?: string | null,
  propertyFeaturesId: string,
};

export type ModelFeatureConditionInput = {
  type?: ModelFeatureTypeInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFeatureConditionInput | null > | null,
  or?: Array< ModelFeatureConditionInput | null > | null,
  not?: ModelFeatureConditionInput | null,
  propertyFeaturesId?: ModelIDInput | null,
};

export type ModelFeatureTypeInput = {
  eq?: FeatureType | null,
  ne?: FeatureType | null,
};

export type UpdateFeatureInput = {
  type?: FeatureType | null,
  description?: string | null,
  id: string,
  propertyFeaturesId?: string | null,
};

export type DeleteFeatureInput = {
  id: string,
};

export type ModelPropertyFilterInput = {
  type?: ModelPropertyTypeInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
  ownerPropertiesId?: ModelIDInput | null,
};

export type ModelOwnerFilterInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelOwnerFilterInput | null > | null,
  or?: Array< ModelOwnerFilterInput | null > | null,
  not?: ModelOwnerFilterInput | null,
};

export type ModelOwnerConnection = {
  __typename: "ModelOwnerConnection",
  items:  Array<Owner | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  type?: ModelRoomTypeInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
  propertyRoomsId?: ModelIDInput | null,
};

export type ModelFeatureFilterInput = {
  type?: ModelFeatureTypeInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
  propertyFeaturesId?: ModelIDInput | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOwnerFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
};

export type ModelSubscriptionRoomFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionFeatureFilterInput = {
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
};

export type CreatePropertyMutationVariables = {
  input: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type CreateOwnerMutationVariables = {
  input: CreateOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type CreateOwnerMutation = {
  createOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOwnerMutationVariables = {
  input: UpdateOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type UpdateOwnerMutation = {
  updateOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOwnerMutationVariables = {
  input: DeleteOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type DeleteOwnerMutation = {
  deleteOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type CreateFeatureMutation = {
  createFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type UpdateFeatureMutation = {
  updateFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type DeleteFeatureMutation = {
  deleteFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      type: PropertyType,
      address: string,
      // > I want to be able to describe the property in some level detail (don't worry about photos for now)
      description?: string | null,
      rooms?:  {
        __typename: "ModelRoomConnection",
        nextToken?: string | null,
      } | null,
      features?:  {
        __typename: "ModelFeatureConnection",
        nextToken?: string | null,
      } | null,
      owner:  {
        __typename: "Owner",
        name: string,
        email: string,
        phone: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      id: string,
      createdAt: string,
      updatedAt: string,
      ownerPropertiesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOwnerQueryVariables = {
  id: string,
};

export type GetOwnerQuery = {
  getOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOwnersQueryVariables = {
  filter?: ModelOwnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOwnersQuery = {
  listOwners?:  {
    __typename: "ModelOwnerConnection",
    items:  Array< {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      type: RoomType,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      propertyRoomsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      type: FeatureType,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      propertyFeaturesId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    type: PropertyType,
    address: string,
    // > I want to be able to describe the property in some level detail (don't worry about photos for now)
    description?: string | null,
    rooms?:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        type: RoomType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyRoomsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        type: FeatureType,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        propertyFeaturesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner:  {
      __typename: "Owner",
      name: string,
      email: string,
      phone: string,
      properties?:  {
        __typename: "ModelPropertyConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    ownerPropertiesId?: string | null,
  } | null,
};

export type OnCreateOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnCreateOwnerSubscription = {
  onCreateOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnUpdateOwnerSubscription = {
  onUpdateOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnDeleteOwnerSubscription = {
  onDeleteOwner?:  {
    __typename: "Owner",
    name: string,
    email: string,
    phone: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      items:  Array< {
        __typename: "Property",
        type: PropertyType,
        address: string,
        // > I want to be able to describe the property in some level detail (don't worry about photos for now)
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        ownerPropertiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    type: RoomType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyRoomsId: string,
  } | null,
};

export type OnCreateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type OnUpdateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};

export type OnDeleteFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?:  {
    __typename: "Feature",
    type: FeatureType,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    propertyFeaturesId: string,
  } | null,
};
