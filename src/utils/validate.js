
export const checkValidData = (email, password) => {
    const isEmailVaild = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Email is invalid";
    if(!isPasswordValidation) return "password is invalid";

    return null;
}
