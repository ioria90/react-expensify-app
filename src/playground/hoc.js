// Higher Order Component (HOC) - A Component(HOC) that renders another component
//reuse code
//Render hijacking
//Prop manipulation
//Abstract State
import React from "react";
import ReactDom from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  //HOC
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//requireAuthentication
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDom.render(
//   <AdminInfo isAdmin={false} info="These are the details" />,
//   document.getElementById("app")
// );
ReactDom.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById("app")
);
