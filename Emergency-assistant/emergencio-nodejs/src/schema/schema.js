const { buildSchema } = require("graphql");
// change form id type to ID!
const schema = buildSchema(`
   

    type Form { 
        _id: ID!
        title: String, 
        fields: [Fields ] 
    }

    type Fields { 
        _id: ID!
        name: String,
        title: String,
        type: String,
        required: Boolean
        options:[Option]
    }

    type Option {
        _id: ID!
        label: String,
        value: String
    }
    type Person {
        id: ID!
        name: String!
        age: Int
    }


    input FormInput { 
        title: String, 
        id: String, 
        fields: [FieldsInput ] 
    }

    input FormIdInput {  
        _id: ID!, 
    }

    input FieldsInput{
        name: String,
        title: String,
        type: String,
        required: Boolean
        options:[OptionInput]
    }
    input OptionInput {
        label: String,
        value: String
    }

  

type FilledForm{
    _id: ID!
    title: String, 
    formId: String,
    fields: [FilledFormFields] 
}

type FilledFormFields{
    _id:ID!
    name: String,
    title: String,
    type: String,
    value : String
}



    input FilledFormInput{
        title: String, 
        formId: String, 
        fields: [FilledFormFieldsInput] 
    }

    input FilledFormFieldsInput{
        name: String,
        title: String
        type: String,
        value : String
    }



    type Area{
        _id: ID!
        title:String
        geoLocation:GeoLocation
    }

    type GeoLocation{
        type: String 
        properties : Property
        geometry :Geometry
    }

    type Property{
        name: String
    }

    type Geometry{
        type: String
        coordinates :[[[Float]]]
    }

    

    input AreaInput{
        title:String
        id: String
        geoLocation:GeoLocationInput
    }

    input GeoLocationInput{
        type: String 
        properties : PropertyInput
        geometry :GeometryInput
    }

    input PropertyInput{
        name: String
    }

    input GeometryInput{
        type: String
        coordinates :[[[Float]]]
    }


    type Role{
        _id: ID!
        userName: String
        role: String
    }

    input RoleInput{
        userName: String
        role: String
    }

    type Query {

        getAllFilledForms: [FilledForm!]!
        getAllEmptyForms: [Form!]!
        getAllAreas:[Area!]!
        getAllRoles:[Role!]!

        getFormById(id: String) : Form
        getFilledFormById(id: String): FilledForm
        getAreaById(id: String): Area
        getRoleById(id: String): Role

        getAreaByPoint(lat: Float! , long:Float!): [String]
        getRoleByUserName(userName: String): Role
        
    }

    type Mutation {
        createForm(form: FormInput): Form
        createFilledForm(filledForm:FilledFormInput): FilledForm
        createArea(area: AreaInput): Area
        createRole(role: RoleInput): Role
    }
    
`);
module.exports = schema;
