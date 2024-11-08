import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    let navigate =useNavigate();

    let msgLabelRef = useRef();
    let stateSelectRef =  useRef();
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let maleRadioBTNRef = useRef();
    let femaleRadioBTNRef = useRef();
    let ageInputRef = useRef();
    let selectedGender;
    let salutation;
    let maritalStatus;
    let yourAge = useRef();
    
    
        
    let onCreateAccount = () => {

        let firstname = firstNameInputRef.current.value;
        let lastName = lastNameInputRef.current.value;
        

        if(selectedGender == "Male") {
            salutation ="Mr.";
        }else {
            if(maritalStatus == "Single")
           {
            salutation= "Miss.";
           }
           else {
            salutation= "Mrs.";
           }
        }
    
        let age =Number(ageInputRef.current.value);
                    if (age >= 0 && age <= 1) {
                        yourAge = "Infant";
                    } else if (age >= 2 && age <= 3) {
                        yourAge = "Toddler";
                    } else if (age >= 4 && age <= 5) {
                        yourAge = "Preschooler";
                    } else if (age >= 6 && age <= 12) {
                        yourAge = "Child";
                    } else if (age >= 13 && age <= 17) {
                        yourAge = "Teenager";
                    } else if (age >= 18 && age <= 39) {
                        yourAge = "Young Adult";
                    } else if (age >= 40 && age <= 59) {
                        yourAge = "Middle-aged Adult";
                    } else if (age >= 60 && age <= 79) {
                        yourAge = "Senior Adult";
                    } else if (age >= 80) {
                        yourAge = "Elderly";
                    } else {
                        yourAge= "Invalid age";
                    }
  

        msgLabelRef.current.innerHTML = `${salutation} ${firstname} 
        ${lastName}, age is ${yourAge}, you're from ${stateSelectRef.current.value}, your account has been created.. & you know

        ${languagesKnown.telugu == true? "Telugu":""} ${languagesKnown.english == true? "English":""}
        ${languagesKnown.hindi == true? "Hindi":""} ${languagesKnown.tamil == true? "Tamil":""}
        ${languagesKnown.kannada == true? "Kannada":"" } languages.
        
        `;
    }

    let languagesKnown = {
        telugu:"false",
        english:"false",
        hindi:"false",
        tamil:"false",
        kannada:"false"
    }
    console.log(languagesKnown);

  return (
    <div className='App signUpDiv'> 
        
        <form className='signUPForm'> 
        <h1 className='signupFormheading'>Signup Form</h1>
            <div className='fullName'>
                <label>Full Name</label>
             
                    <input type='text' placeholder='Enter First Name' ref={firstNameInputRef}></input><br/>
                    {/* <label style={{width:"auto"}}>First</label> */}
                 
                    <input type='text' placeholder='Enter Last Name' ref={lastNameInputRef}></input><br/>
                    {/* <label style={{width:"auto"}}>last</label> */}
             
            </div>
            <div className='gender'>
                <label>Gender</label>
                <input type='radio' name='gender' ref={maleRadioBTNRef}

                    onChange={ () => {
                        if(maleRadioBTNRef.current.checked == true) {
                            selectedGender ="Male"
                        }
                    }}
                
                ></input>
                <label style={{width:"auto"}}>male</label>
                <input type='radio' name='gender' ref={femaleRadioBTNRef}
                
                    onChange={ () => {
                        if(femaleRadioBTNRef.current.checked == true) {
                            selectedGender ="Female"
                        }
                    }}
                
                ></input>
                <label style={{width:"auto"}}>female</label>
            </div>
            <div className='maritalStatus'>
                <label>Marital Status</label>
                <input type='radio' name='ms'

                    onChange={ (singleEO) => {
                        if(singleEO.target.checked == true){
                            maritalStatus ="Single"
                        }
                    }}

                ></input>
                <label style={{width:"auto"}}>Single</label>
                <input type='radio' name='ms'
                
                    onChange={ (marriedEO) =>{
                        if(marriedEO.target.checked == true){
                            maritalStatus ="Married"
                        }
                    } }
                
                ></input>
                <label style={{width:"auto"}}>Married</label>
            </div>
            <div className='DOB'>
                <label>Date of birth</label>
                <input type='datetime-local'></input>
            </div>
            <div className='age'>
            <label>Age</label>
            <input type='number' ref={ageInputRef}></input>
            </div>
            <div className='states'>
                <label for="states">Choose a state</label>
                <select name="states" id="states" ref={stateSelectRef}>
                    <option value="">--Select a state--</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                </select>
            </div>
            <div className='languagesKnown'>
                <label>Languages Known</label>
                <input type='checkbox'
                
                onChange={ (teluguEO) => {
                    languagesKnown.telugu =teluguEO.target.checked;
                }}
                
                ></input>
                <label style={{width:"auto"}}>Telugu</label>
                <input type='checkbox'

                onChange={ (englishEO) => {
                    languagesKnown.english = englishEO.target.checked;
                }}
                
                ></input>
                <label style={{width:"auto"}}>English</label>
                <input type='checkbox'
                
                onChange={ (hindiEO) => {
                    languagesKnown.hindi = hindiEO.target.checked;
                }}
                
                ></input>
                <label style={{width:"auto"}}>Hindi</label>
                <input type='checkbox'
                
                onChange={ (tamilEO) => {
                    languagesKnown.tamil = tamilEO.target.checked;
                }}
                
                ></input>
                <label style={{width:"auto"}}>Tamil</label>
                <input type='checkbox'
                
                onChange={ (kannadaEO) => {
                    languagesKnown.kannada = kannadaEO.target.checked;
                }}
                
                ></input>
                <label style={{width:"auto"}}>Kannada</label>
            </div>
            <div className='email'>
            <label>Email</label>
            <input type='email'></input>
            </div>
            <div className='password'>
            <label>Password</label>
            <input type='password'></input>
            </div>
            <div className='signUPINBTN'>
                <button type='button' className='signUPBTN'
                    onClick={ () => {
                        onCreateAccount();
                    }}
                >Signup</button>
                <button type='button' className='signINBTN'
                    onClick={ () => {
                        navigate('/');
                        
                    }}
                
                >Signin</button>
            </div>
            <label style={{width:"auto"}} ref={msgLabelRef}></label>
        </form>
       
    </div>
  )
}

export default Signup
