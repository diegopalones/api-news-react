import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const NewsForm = () => {
  const [data, setData] = useState({
    title: "",
    subject: "",
    article: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    title: "",
    subject: "",
    article: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.title.length + 1 < 3) {
      setMessage("You need to fill out more information");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.title + " " + data.subject);
    saveResults(data);
    clearState();
    setMessage("News article added");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  function getSavedData() {
    const usersDb = localStorage.getItem("results"); 
    const dataArray = JSON.parse(usersDb) || [];
    
    return dataArray;
  }
  getSavedData();
  function saveResults(data) {
    const database = {
      title: data.title,
      subject: data.subject,
      article: data.article,
    }; 

    const lc = getSavedData();
    const ls = lc.push(database);
    console.log("this is lc ", lc);
    localStorage.setItem("results", JSON.stringify(lc)); 
    
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="contact">Add your article here</h1>
      <input
        className="title"
        type="text"
        placeholder="title"
        value={data.title}
        onChange={handleInputChange}
        name="title"
      />

      <input
        className="subject"
        type="text"
        placeholder="subject"
        value={data.subject}
        onChange={handleInputChange}
        name="subject"
      />
      <input
        className="message"
        type="textarea"
        placeholder="write your article here"
        value={data.article}
        onChange={handleInputChange}
        name="article"
      />

      <button className="button" type="submit" disabled={btnDisabled}>
        Submit
      </button>
      {message}
    </form>
  );
};
export default NewsForm;
