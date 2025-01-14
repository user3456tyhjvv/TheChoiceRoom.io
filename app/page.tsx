import Navbar from '@/components/Navbar'
import EventPromotion from '@/components/EventPromotion'
import VideoSection from '@/components/VideoSection'
import RegistrationForm from '@/components/RegistrationForm'
import JoinWhatsAppGroup from '@/components/JoinWhatsAppGroup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <EventPromotion />
        <VideoSection />
        <RegistrationForm />
        <JoinWhatsAppGroup />
      </main>
      <Footer />
    </div>
  )
}

