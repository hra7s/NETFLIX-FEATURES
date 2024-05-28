export const checkValidate=(email,password,fname)=>{
    
    const isEmailValid=/^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/.test(email) 
    const isPassWordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fname)

    if (!isEmailValid) return "Email ID is not valid";
    if(!isPassWordValid) return "Password is not valid";
    // else if(!isNameValid) return "Name is not valid";
    return null;

}  