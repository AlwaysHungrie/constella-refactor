import StarBackground from '@/components/starBackground'
import Header from '@/components/header'
import WidgetContainer from '@/components/widget/widgetContainer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StarBackground isPaused={false} />
      <div className="flex flex-col items-center min-h-screen font-mono py-8">
        <Header />
        <WidgetContainer />
      </div>
    </div>
  )
}
