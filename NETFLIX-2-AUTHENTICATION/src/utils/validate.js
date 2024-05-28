// export const checkValidate=(email,password,fname)=>{
    
//     const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) 
//     const isPassWordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fname)

    
//     if(!isPassWordValid) return "Password is not valid";
//     //if (!isEmailValid) return "Email ID is not valid";
//     if(!isNameValid) return "Name is not valid";
//     return null;

// }  

export const checkValiddate = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };