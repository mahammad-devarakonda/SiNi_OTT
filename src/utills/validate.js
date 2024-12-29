export const checkValidData=(email,password,username)=>{
    const isEmailValid =/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassowrdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserNameValid=/^(?=.*[A-Z])(?=.*_)(?=.*\d)[A-Za-z0-9_]+$/.test(username);
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPassowrdValid) return "Password is not valid";
    if(isUserNameValid) return "Username is not valid"
    return null;
};