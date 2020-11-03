// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//     username: "",
//   };

//   handleChange = (e) => {
//     console.log(e.target);
//     this.setState({
//       [e.target.name]: e.target.value, //ex) message:e.target.value
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ":" + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username" //state의 속성과 같아야함. e.target.name에 해당됨.
//           placeholder="사용자명"
//           value={this.state.username} //e.target.value에 해당됨. >> input의 value값을 state값으로 설정한다.
//           onChange={this.handleChange} // input의 value 값을 state에 있는 값으로 설정.
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  // const [username, setUsername] = useState("");
  // const [message, setMessgae] = useState("");

  const onChange = (e) => {
    const nextForm = {
      ...form, //기존 객체를 복사하기
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessgae(e.target.value);

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
