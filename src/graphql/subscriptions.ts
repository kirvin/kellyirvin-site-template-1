/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
      id
      name
      phone
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
