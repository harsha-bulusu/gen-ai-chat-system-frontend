import AuthenticationWrapper from "./components/AuthenticationWrapper";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // <AuthenticationWrapper>
      <div className="app-container">
        <Sidebar />
        <Main />
      </div>
    // </AuthenticationWrapper>
  );
}

export default App;
