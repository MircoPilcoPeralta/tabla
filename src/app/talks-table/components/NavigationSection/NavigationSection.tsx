import { useRouter } from 'next/navigation'

export const NavigationSection = () => {
  const router = useRouter()

  const redirectToTalksRegistration = () => {
    router.push('/')
  }

  const redirectToSpeakerRegistration = () => {
    router.push('/talksForm')
  }

  return (
    <div className="d-flex  justify-center gap-10">
      <button
        className="btn btn-outline-primary"
        onClick={redirectToTalksRegistration}
      >
        Registrar una charla
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={redirectToSpeakerRegistration}
      >
        Registrar un speaker
      </button>
    </div>
  )
}
