import Background from '../assets/thomas-stephan-Fm_aWbuWCRQ-unsplash.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-origin-content bg-cover bg-center'
      >
        <div className='flex place-items-center h-screen'>
          <p className='p-5 text-white bg-opacity-50 rounded h-44 text-3xl font-serif '>
            It don't matter if you win by a inch or a mile... Winning is <span>WINNING!!</span> 
          </p>
        </div>
    </div>
  )
}

export default Home
