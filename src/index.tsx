// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css'
// const a: React;


// const root = createRoot(document.getElementById('root')!);
// root.render(
//     <StrictMode>
      
//       {/* <MyComponent />   */}
//       <div>test</div>
//     </StrictMode>
// );

// .render(
//   <StrictMode>
    
//     {/* <MyComponent />   */}
//     <div>test</div>
//   </StrictMode>
// )

// const MyComponent: React.FC = (): React.ReactNode => {
//   return <span>This is fine</span>;
// };