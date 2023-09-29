import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

  return (
    // TODO: fix navbar position to the top
    <div className='bg-black'>
        <nav className='flex justify-between flex-shrink-0 px-11 bg-gradient-to-r from-slate-500 to-blue-500 p-8 rounded-lg shadow-md fixed-top border border-black'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>One Piece</Link>
            </div>
            <div className='block'>
                <Button onClick={dropDown} className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
                    <i className="fa-solid fa-bars"></i>
                </Button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link onClick={clicked} to='/' className='flex place-itmes-center mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link onClick={clicked} to='/dashboard' className='flex place-itmes-center mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    </div>
  )
}