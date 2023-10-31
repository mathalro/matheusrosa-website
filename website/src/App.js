import CentralizedContainer from './components/common/CentralizedContainer';
import MarkdownEditor from './components/markdown/MarkdownEditor';
import Navbar from './components/nav/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
        <CentralizedContainer>
          <MarkdownEditor />
        </CentralizedContainer>
    </div>
  );
}

export default App;
