import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Users from '../components/Users'
import ExplainationComponent from '../components/ExplainationComponent'
import Comparison from '../components/Comparison'
import Footer from '../components/Footer'

const Landing = () => {
  const isDark = false; // You can make this dynamic later with a theme context

  return (
    <div
      className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 flex flex-col min-h-screen`}
      style={{
        backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <Hero />
      <Users />
      <ExplainationComponent />
      <Comparison />
      <Footer />
    </div>
  )
}

export default Landing