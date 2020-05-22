import React from "react";
import HomepageTemplate from "./HomepageTemplate";

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} />;
}

export default ShadowedHomepage;
