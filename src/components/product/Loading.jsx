import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
  <ContentLoader 
  speed={1.5}
  width={240}
  height={340}
  viewBox="0 0 240 340"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="12" y="1" rx="0" ry="0" width="200" height="200" /> 
  <rect x="13" y="219" rx="0" ry="0" width="200" height="17" /> 
  <rect x="14" y="246" rx="0" ry="0" width="200" height="17" /> 
  <rect x="219" y="277" rx="0" ry="0" width="4" height="1" /> 
  <rect x="13" y="271" rx="0" ry="0" width="200" height="17" /> 
  <rect x="61" y="299" rx="0" ry="0" width="95" height="36" />
</ContentLoader>
  )
}

export default Loading;