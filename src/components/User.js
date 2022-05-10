import Input from '../components/Input'
import { useState } from 'react';
import Label from './Label';

// function User() {
// const [first_name, setFirst_name] = useState("");

// const get_data_from_child = (data) => {
//     return setFirst_name(data);
// }

// // console.log(first_name);

//     return (
//         <>

//         {/* change this to form and send all data after submit */}
//             <div className="flex justify-center items-center flex-col p-3">
//                 <div className="flex flex-col p-2">
//                     <Label label="First name"/>
//                     <Input type={"text"} name={"first_name"} callback={get_data_from_child}/>
//                 </div>
//                 <div className="flex flex-col p-2">
//                     <Label label="Last name"/>
//                     <Input type={"text"} name={"last_name"}/>
//                 </div>
//                 <div className="flex flex-col p-2">
//                     <Label label="Email"/>
//                     <Input type={"email"} name={"email"}/>
//                 </div>
//                 <div className="flex flex-col p-2">
//                     <Label label="Phone number"/>
//                     <Input type={"number"} name={"phone_number"}/>
//                 </div>
//                 <div className="flex flex-col p-2">
//                     <Label label="Password"/>
//                     <Input type={"password"} name={"password"}/>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default User;



 
function Form() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div className="bg-[#add8e6] h-[50px] p-1 w-fit"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="bg-[#ff0000] w-fit p-1 h-[50-px]"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="flex flex-col items-center">
 
      <form className="flex flex-col w-fit">
        {/* Labels and inputs for form data */}
        <Label label={"name"}/>
        <Input type={"text"} name={"fname"} value={name} onChange={handleName}/>
        
        <Label label={"Email"}/>
        <Input type={"email"} name={"email"} value={email} onChange={handleEmail}/>
        
        <Label label={"password"}/>
        <Input type={"password"} name={"password"} value={password} onChange={handlePassword}/>
 
        <button onClick={handleSubmit} className="bg-[#05a] rounded font-semibold p-1 my-2.5 mx-auto text-white" type="submit">Submit</button>
      </form>

        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
    </div>
  );
}

export default Form;