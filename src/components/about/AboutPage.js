import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;


// This can also be done with a stateless class.  However for hot-loading reasons we are using a class at the top of the about hierarchy.
// const AboutPage = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
//     </div>
//   );
// }

