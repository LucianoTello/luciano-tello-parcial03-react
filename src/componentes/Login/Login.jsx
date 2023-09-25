import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './login.css';

function Login() {
    //const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user=='ADMIN'){
            //window.location.href="/home";
            if(password=='1234'){
                window.location.href="/home";
            }else{
                alert('Contraseña Incorrecta');
            }
        }else{
            alert('Usuario Incorrecto');
        }
    }    

    function redirect(){
       
        let aux = true;
        if(aux){
            window.location.href="/home";
            //useHistory.push('/home');
        }else{
            console.log('noooo');
        }
    }

    function showuser(e){
        let auxuser = e.target.value
        setUser(auxuser);
        console.log(auxuser);
    }

    function showpassword(e){
    let auxpass = e.target.value
    setPassword(auxpass);
    console.log(auxpass);
    }
    
    function seethedata() {
        console.log("Usuario : ADMIN");
        console.log("Contraseña : 1234");
    }    

  return (
    <div>
        <div className="cuerpo">
            <div className="contenedor">
            <form onSubmit={handleSubmit}>
                <h3>INGRESE EL USUARIO Y CONTRASEÑA</h3>
                <input type="text" placeholder="Ingrese el usuario" value={user} onChange={showuser}></input> <br></br><br></br>
                <input type="password" placeholder="Ingrese contraseña" value={password} onChange={showpassword}></input> <br></br><br></br>
                <button onClick={seethedata} type="button">Ver Usuario y Contraseña</button>
                <button type="submit">Ingresar</button>
            </form>          
            </div>  
        </div>
        {/*<button onClick={prueba}>home</button>*/}
    </div>
    
    
  )
}

export default Login