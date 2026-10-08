import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage').then((module) => ({ default: module.ServicesPage })),
)
const ServiceDetailPage = lazy(() =>
  import('@/pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })),
)
const WhyNRSPage = lazy(() =>
  import('@/pages/WhyNRSPage').then((module) => ({ default: module.WhyNRSPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="why-nrs" element={<WhyNRSPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
