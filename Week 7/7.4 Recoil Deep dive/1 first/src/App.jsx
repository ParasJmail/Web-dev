import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);

  return (
  
    <div>

        <button>Home</button>
        
        <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount })</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messaging ({messagingAtomCount})</button>
        <button>Notifaction ({notificationAtomCount})</button>
        <button onClick = {() => {
          setMessagingAtomCount(c => c + 1);
        }}>Me</button>
    
    </div>
    
  )
}

export default App
