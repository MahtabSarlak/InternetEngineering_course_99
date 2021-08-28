import { gql } from "apollo-boost";

export const createFilledForm = gql`
  mutation($filledForm: FilledFormInput) {
    createFilledForm(filledForm: $filledForm) {
      _id
    }
  }
`;
