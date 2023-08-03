/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const contacts = /* GraphQL */ `
  query Contacts {
    contacts {
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
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
