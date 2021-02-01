import React from "react";

function contentBox(props) {
  return (
   <div className="content-box">
       {props.children}
   </div>
  );
}

export default contentBox;