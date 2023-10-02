import { Routes, Route } from 'react-router-dom';
import { About, Blog, Home, NotFound, Single, Createpost, Login } from './pages';
import Layout from './components/Layout';
import RequireLogin from './hoc/RequireLogin';
import { Contacts, Team } from './pages/About';

const App = () => {

  return (
    <Routes>

      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> }/>
        <Route path="blog" element={ <Blog /> }/>
        <Route path="blog/:slug" element={ <Single /> }/>
        <Route path="blog/new" element={
          <RequireLogin>
            <Createpost /> 
          </RequireLogin>
        } />
        <Route path="about/*" element={ <About /> }>
          <Route path="contacts" element={ <Contacts /> }/>
          <Route path="team" element={ <Team /> }/>
        </Route>
        <Route path="login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> }/>
      </Route>
      
    </Routes>
  );
}

export default App;
