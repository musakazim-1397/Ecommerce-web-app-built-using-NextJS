import Blog from '../components/FromTheBlog/Blog'
import Hero from '../components/HeroSection/Hero'
import NewArrival from '../components/NewArrival/NewArrival'
import PremiumProducts from '../components/PremiumProducts/PremiumProducts'
import SuperOffer from '../components/SuperOffer/SuperOffer'


export default function Home() {
  return (
    <div className='w-screen h-full'>
      <Hero/>
      <PremiumProducts/>
      <SuperOffer/>
      <NewArrival/>
      <Blog/>
    </div>
  )
}
