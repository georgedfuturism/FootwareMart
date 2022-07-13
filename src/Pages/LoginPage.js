import React,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../auth_login/authActions';
import './loginpage.css';
import {userLogin} from '../requestMethods';
import {Alert,Spinner} from 'react-bootstrap';
import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
    background:url("https://cdn.hipwallpaper.com/m/49/82/OGDurM.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginPage=({loading,error,...props})=>{


    const [values, setValues] = useState({
        userName: '',
        password: ''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                props.history.push('/');
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
        //console.log("Loading again",loading);

        
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ",loading);

    return (
        <Container>
        <div className="login-page">
                   
              
                                            
        <section className="h-100">
        <div className="container h-100">
       
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">

                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="email">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                    
                                        <div className="invalid-feedback">
                                            UserId is invalid
                                        </div>
                                    
                                    
                                    
                                </div>

                                <div className="form-group">
                                    <label>Password
                                        {/* <a href="forgot.html" className="float-right">
                                            Forgot Password?
                                        </a> */}
                                    </label>
                                    <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                     </div>
                                </div>
                                

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                        {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {/* <ClipLoader
                                        //css={override}
                                        size={20}
                                        color={"#123abc"}
                                        loading={loading}
                                        /> */}
                                    </button>
                                </div>
                            </form>
                            { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>

                            }
                            
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
        </Container>
    )


    
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        //loading:auth.loading,
       // error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);