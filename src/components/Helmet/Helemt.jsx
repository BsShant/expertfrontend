import React from "react";
import Helmet from "react-helmet";
const HelemtContainer = (props) => {
  return (
    <div>
      <Helmet
        encodeSpecialCharacters={true}
        titleTemplate="MySite.com - %s"
        defaultTitle="My Default Title"
        onChangeClientState={(newState, addedTags, removedTags) =>
          console.log(newState, addedTags, removedTags)
        }
      >
        {/* title attributes and value */}
        <title itemProp="name" lang="en">
          {props.title}
        </title>
        {/* multiple meta elements */}
        <meta name="description" content={props.description} />
        <meta property="og:image" content={props.oggImage} />
      </Helmet>
      {props.children}
    </div>
  );
};

export default HelemtContainer;
