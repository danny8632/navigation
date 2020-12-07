import errorMessages from './ErrorMessages'; 

export default function Validate(field, value)
{
    var formValues = {};
    formValues[field] = value;

    var formFields = {};
    formValues[field] = errorMessages[fieldName];

    const errorMsg = validatejs(formValues, formFields);

    if (errorMsg)
    {
        return errorMsg[fieldName][0];
    }

    return null;
}