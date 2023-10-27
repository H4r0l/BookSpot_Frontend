import { DrawerWithNavigation } from './components/Drawer'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {

  return (
    <>
      <div className="bg-[#67909C] p-4 flex justify-items-center ">
        <DrawerWithNavigation />
      </div>
      <div className='flex justify-center'>
        <Login />
      </div>
    </>
  );
}

export default App
