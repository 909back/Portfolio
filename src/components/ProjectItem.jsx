import React from "react";
import style from "../assets/scss/Project.module.scss";
import config from "../../_config.json";

const ProjectItem = ({ index, image, styleName }) => {
  const [data, setData] = React.useState(config.project_info[index]);

  return (
    <>

    </>
  );
};

export default ProjectItem;
