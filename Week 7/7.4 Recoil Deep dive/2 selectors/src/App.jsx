import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'
import { useMemo } from 'react';
import { totalNotificationSelector } from './atom';

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
  // with selector
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // without selector
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + messagingAtomCount + notificationAtomCount
  // },[networkNotificationCount, jobsAtomCount, messagingAtomCount, notificationAtomCount])
  
  return (
  
    <div>

        <button>Home</button>
        
        <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount })</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messaging ({messagingAtomCount})</button>
        <button>Notifaction ({notificationAtomCount})</button>
        <button>Me {totalNotificationCount}</button>
    
    </div>
    
  )
}

export default App
