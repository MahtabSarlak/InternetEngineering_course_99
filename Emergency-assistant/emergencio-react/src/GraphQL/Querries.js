import { gql } from "apollo-boost";

export const getForms = gql`
  {
    getAllEmptyForms {
      title
      _id
      fields {
        name
        title
        type
        required
        options {
          _id
          label
          value
        }
      }
    }
  }
`;

export const getFormById = gql`
  query Form($id: String!) {
    getFormById(id: $id) {
      _id
      title
      fields {
        name
        title
        type
        required
        options {
          label
          value
        }
      }
    }
  }
`;

export const getFilledFormById = gql`
  query Form($id: String!) {
    getFilledFormById(id: $id) {
      _id
      title
      fields {
        name
        title
        type
        value
      }
    }
  }
`;
export const getFilledForms = gql`
  query {
    getAllFilledForms {
      _id
      title
      formId
    }
  }
`;
export const getFilledFormsWithFields = gql`
  query {
    getAllFilledForms {
      _id
      title
      formId
      fields {
        name
        title
        type
        value
      }
    }
  }
`;
export const getRoleByUserName = gql`
  query Role($username: String!) {
    getRoleByUserName(userName: $username) {
      _id
      userName
      role
    }
  }
`;
export const getAllAreas = gql`
  {
    getAllAreas {
      _id
      title
      geoLocation {
        type
        properties {
          name
        }
        geometry {
          coordinates
        }
      }
    }
  }
`;
