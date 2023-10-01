import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    };

    const clicked = () => {
        setIsVisible(false)
    };

    const signOutOnClick = () => {
        signOut(auth);
        location.reload();
    };

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    };

  return (
    // TODO: fix navbar position to the top
    <div className='bg-black'>
        <nav className='flex justify-between flex-shrink-0 px-11 bg-gradient-to-r from-slate-500 to-blue-500 p-8 rounded-lg shadow-md fixed-top border border-black'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>One Piece</Link>
            </div>
            <div className='block '>
                <Button onClick={dropDown} className='flex items-center px-3 py-2 text-slate-200 border border-lg rounded transition ease-in-out border-white hover:text-white hover:border-white hover:shadow-xl'>
                    <i className="fa-solid fa-bars"></i>
                </Button>
            </div>
            { isVisible ? (
            <div className='w-full container flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 bg-blue-400 m-3 rounded-full justify-center hover:origin-top-left hover:rotate-12'>
                        <div>
                            <Link onClick={clicked} to='/' className='flex align-item-center place-itmes-center  text-white hover:text-white '>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 bg-blue-400 m-3 rounded-full justify-center hover:origin-top-left hover:rotate-12'>
                        <div>
                            <Link onClick={clicked} to='/dashboard' className='flex align-item-center place-itmes-center  text-white hover:text-white '>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?

                        <Button className='p-3 bg-blue-400 m-3 rounded-full justify-center hover:origin-top-left hover:rotate-12'>
                            <div>
                                <Link onClick={() => {signInOnClick()}} to='/' className='flex align-item-center place-itmes-center  text-white hover:text-white '>
                                    Sign In
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 bg-blue-400 m-3 rounded-full justify-center hover:origin-top-left hover:rotate-12'>
                            <div>
                                <Link onClick={() => {signOutOnClick()}} to='/' className='flex align-item-center place-itmes-center  text-white hover:text-white '>
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    </div>
  )
}