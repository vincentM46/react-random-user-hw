import './App.css';
import { useState, useEffect } from 'react';
import { fetchUser } from "./services/Random_User";
import UserSummary from "./components/UserSummary";

function App() {

  const [currentUser, setCurrentUser] = useState({});

  async function changeUser(u) {
    try {
      const data = await fetchUser();
      setCurrentUser(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    changeUser();
  }, []);
  return (
    <div className="App">
      <div className="main">
        <button onClick={(u) => changeUser(u)}>New User</button>
        <div>
          <UserSummary userData={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
