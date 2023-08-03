/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
