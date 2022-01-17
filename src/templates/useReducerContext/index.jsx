import { AppContext } from '../../contexts/AppReducer';
import { H2 } from '../../components/H2';

function App() {
  return (
    <AppContext>
      <div>
        <H2 />
      </div>
    </AppContext>
  );
}

export default App;
