import StarBackground from '@/components/starBackground'
import Header from '@/components/header'
import WidgetContainer from '@/components/widget/widgetContainer'
import { Dialog } from '@/components/dialog'
import { Socials } from '@/components/socials'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StarBackground />
      <div className="flex flex-col items-center min-h-screen font-mono py-8">
        <Header />
        <WidgetContainer />
      </div>
      <Dialog />
      <Socials />
    </div>
  )
}
