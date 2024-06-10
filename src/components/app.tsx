import { useState } from "react";
import { FC } from 'react';
import { ProfileHeader } from "./profile-header";

const App: FC = (): React.ReactNode  => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <ProfileHeader/>
       <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <div>TODO project list</div>
    </main>
  );
};

export default App;
