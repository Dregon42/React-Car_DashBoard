import Background from '../assets/thomas-stephan-Fm_aWbuWCRQ-unsplash.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-origin-content bg-cover bg-center'
      >
        <div className='flex place-items-center h-screen'>
          <p className='p-5 bg-white bg-opacity-50 text-black rounded h-44 text-3xl'>
            It don't matter if you win by a inch or a mile... Winning is WINNING!!  
          </p>
        </div>
    </div>
  )
}

export default Home

