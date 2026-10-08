import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FAQWidget } from '@/components/faq/FAQWidget'
import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FAQWidget />
    </div>
  )
}
