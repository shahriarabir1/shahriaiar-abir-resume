import Workitem from "./Components/Workitem";
import Main from "./Components/Main";
import Shahriar from "./Components/Shahriar";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";
import Awards from "./Components/Awards";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
function App() {
  return (
    <>
      <Shahriar />
      <Main />
      <Skill />
      <Projects />
      <Awards />
      <Workitem />

      <Contact />
      <Resume />
    </>
  );
}

export default App;
