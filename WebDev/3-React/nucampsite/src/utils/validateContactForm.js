export const validateContactForm = (values) => {

    const errors = {};

    // validation for the first name
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less.';
    }

    // validation for the last name
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less.';
    }

    // Check that all phone values are numbers
    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should only contain numbers.'
    }

    // Check that email input as @
    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;

}