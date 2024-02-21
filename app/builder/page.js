// import NavBar from "./NavBar/NavBar";
import Layout from "./TemplateEditor/editorLayout";
import TemplateLayout from "./TemplateViewer/viewerLayout";
// import { useState } from "react";

const Builder = () => {
  // const [zoom, setZoom] = useState(1);
  // const zoomIn = () => {
  //   setZoom((prev) => prev - 0.1);
  // };

  //   const onClick = () => {
  //     fetch("http://localhost:4000/download");
  //   };

  return (
    <div className="flex relative justify-evenly">
      {/* Template Viewer */}

      <div className="w-3/4 m-5 shadow-slate-700 shadow-2xl h-screen  overflow-y-auto ">
        {/* <button className="absolute" onClick={zoomIn}>
          zoom in
        </button> */}
        <div>
          <TemplateLayout />
        </div>
      </div>

      {/* Editor */}
      <div className=" w-1/4">
        <Layout />
      </div>
      {/* <div>
        <a href="http://localhost:4000/download">Download this template</a>
      </div> */}
    </div>
  );
};

export default Builder;
