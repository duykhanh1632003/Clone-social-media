import { Routes , Route } from 'react-router-dom'
import './globals.css'
import SigninForm from './_auth/form/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/form/SignupForm';
import AuthLayout from './_auth/AuthLayou';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return ( 
        <main className='flex h-screen'>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
                
            </Routes>
            <Toaster />
        </main>
        
     );
}
 
export default App; 