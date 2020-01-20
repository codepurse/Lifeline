import Link from "next/link";

const Textbar = () => (
  <div>
      <input
    type="text"
    className="txtEmail"
    placeholder="Enter email address here.."
  />

  <style jsx>{` 
  .txtEmail,
  .txtPassword {
    font-family: roboto, sans-serif;
    color: #424242;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    outline: none;
    transition: all 0.2s;
  }
  .txtEmail:focus,
  .txtPassword:focus {
    background-color: rgb(230, 49, 49);
    color: white;
  }
  input:focus::-webkit-input-placeholder {
    color: white;
  }
  input[type="password"],
  input[type="text"] {
    margin-top: -5px;
  }
  `} </style>

  </div>

);

export default Textbar;
