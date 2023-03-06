import './App.css';
import Base from './base/base';
import { StudentDetails } from './components/student';

function App() {
  return (
    <div className="App">
      <Base
      title="STUDENT DETAILS"
      description="Details about batch students"
      >
        <StudentDetails/>
      </Base>
    </div>
  );
}

export default App;
