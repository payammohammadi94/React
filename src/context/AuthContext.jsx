import React,{useState,useEffect,createContext} from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children})=>{
    //توکن را دریافت کرده و در این متغییر می‌ریزیم
    let [authTokens,setAuthTokens] = useState(localStorage.getItem("AuthToken")? JSON.parse(localStorage.getItem("AuthToken")):null)
    //برای بدست آوردن یوزدنیم شخص ثبت نام کننده.
    let [user,setUser] = useState(localStorage.getItem("AuthToken")? jwt_decode(JSON.parse(localStorage.getItem("AuthToken")).access):null)
    
    //این متغییر برای این است که اگر یوزر، پسورد و یوزرنیم را اشتباه وارد کرد یک هشداری نشان داده شود.
    let [loginUserField,setLoginUserField] = useState(false)
    //برای اینکه بتوانیم صفحه را به صفحه‌ی دیگری ببریم
    const history =useHistory()
    
    let loginUser =async(e)=>{
        e.preventDefault()

        let response = await fetch('https://payam.thetime.ir/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':e.target.username.value,
                'password':e.target.password.value
            })

        })
        
        console.log(response)

        let data = await response.json()
        if (response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("AuthToken",JSON.stringify(data))
            
            history.push('/selectuser')
        }

        else{

            setLoginUserField(true)
        }
    }

    const logout=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("AuthToken")
        history.push("/login")
    }
    
    let contextData = {
        user:user,
        loginUser:loginUser,
        loginUserField:loginUserField,
        logout:logout
    };

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}