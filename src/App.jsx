import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import { HotelDetails, HotelList, Navbar } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  const client = new QueryClient();
  return (
    <>
      <Navbar />
      <Toaster position='bottom-center' reverseOrder={false} />
      <QueryClientProvider client={client}>
        <Switch>
          <Route path='/' component={HotelList} />
          <Route path='/hotel/:id' component={HotelDetails} />
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
