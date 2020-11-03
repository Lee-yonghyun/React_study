// import React from "react";
// import propTypes from "prop-types";

// const Mycomponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다.
//       <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// Mycomponent.defaultPros = {
//   name: "기본이름",
// };

// Mycomponent.propTypes = {
//   name: propTypes.string,
//   favoriteNumber: propTypes.number.isRequired
// };
// export default Mycomponent;

import React, { Component } from "react";
import propTypes from "prop-types";

class Mycomponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요.제 이름은 {name}입니다. children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// Mycomponent.defaultProps = {
//   name: "기본이름",
// };

// Mycomponent.propTypes = {
//   name: propTypes.string,
//   favoriteNumber: propTypes.number.isRequired,
// };

export default Mycomponent;
