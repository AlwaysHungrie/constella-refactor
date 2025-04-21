import { SERVER_URL, ToolMode } from '@/config'
import ContentCard from './contentCard'

const inputStyle =
  'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100'
const labelStyle = 'block text-sm font-medium text-gray-700'

export default function VerifyAttestationCard({
  toolMode,
  attestation,
  setAttestation,
  pcrValues,
  awsRootCertificate,
  attestationISOTime,
  useCustomExpiryTime,
  customExpiryDate,
  customExpiryTime,
  setUseCustomExpiryTime,
  setCustomExpiryDate,
  setCustomExpiryTime,
}: {
  toolMode: ToolMode
  attestation: string
  setAttestation: (attestation: string) => void
  pcrValues: string
  awsRootCertificate: string
  attestationISOTime: string
  useCustomExpiryTime: boolean
  customExpiryDate: string
  customExpiryTime: string
  setUseCustomExpiryTime: (useCustomExpiryTime: boolean) => void
  setCustomExpiryDate: (customExpiryDate: string) => void
  setCustomExpiryTime: (customExpiryTime: string) => void
}) {
  const handleVerifyAttestation = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attestation: attestation,
          pcr0: pcrValues.split(',')[0].trim(),
          pcr1: pcrValues.split(',')[1].trim(),
          pcr2: pcrValues.split(',')[2].trim(),
          expiryDate: useCustomExpiryTime
            ? `${customExpiryDate}T${customExpiryTime}:00.000Z`
            : attestationISOTime,
          awsRootCertificate: awsRootCertificate,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to verify certificate')
      }

      const data = await response.json()
      console.log('Verification result:', data)
      if (data.result) {
        alert('Certificate is Valid')
      } else {
        alert('Certificate is Invalid')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCustomExpiryTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    try {
      const dateStr = `${customExpiryDate}T${value}:00.000Z`
      const date = new Date(dateStr)
      if (!isNaN(date.getTime())) {
        const isoTime = date.toISOString()
        setCustomExpiryTime(isoTime.split('T')[1].slice(0, 5))
        setCustomExpiryDate(isoTime.split('T')[0])
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCustomExpiryDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    try {
      const dateStr = `${value}T${customExpiryTime}:00.000Z`
      const date = new Date(dateStr)
      if (!isNaN(date.getTime())) {
        const isoTime = date.toISOString()
        setCustomExpiryDate(isoTime.split('T')[0])
        setCustomExpiryTime(isoTime.split('T')[1].slice(0, 5))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <ContentCard title="Verify Attestation">
      <input
        type="text"
        value={attestation}
        onChange={(e) => setAttestation(e.target.value)}
        placeholder="Enter the attestation certificate"
        className="rounded-sm p-2 border border-gray-300"
      />

      {attestation && (
        <>
          <div>
            <div className="flex flex-col mt-4">
              <span className={`font-bold flex-1`}>Attestation Fetched On</span>

              <div className={`flex items-center gap-2 ${labelStyle}`}>
                <input
                  type="checkbox"
                  checked={useCustomExpiryTime}
                  onChange={() => setUseCustomExpiryTime(!useCustomExpiryTime)}
                />
                Use custom date and time{' '}
                {toolMode === 'constella' &&
                  '(required if Constella is in dev mode)'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="date"
                  id="expiryDateInput"
                  name="expiryDateInput"
                  value={
                    useCustomExpiryTime
                      ? customExpiryDate
                      : attestationISOTime.split('T')[0]
                  }
                  onChange={handleCustomExpiryDateChange}
                  className={inputStyle}
                  required
                  disabled={!useCustomExpiryTime}
                />
              </div>
              <div>
                <input
                  type="time"
                  id="expiryTimeInput"
                  name="expiryTimeInput"
                  value={
                    useCustomExpiryTime
                      ? customExpiryTime
                      : attestationISOTime.split('T')[1].slice(0, 5)
                  }
                  onChange={handleCustomExpiryTimeChange}
                  className={inputStyle}
                  required
                  disabled={!useCustomExpiryTime}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <button
        onClick={handleVerifyAttestation}
        className="bg-brand text-white font-bold p-2 rounded-sm hover:bg-brand/80 cursor-pointer transition-colors"
      >
        Verify Attestation
      </button>
    </ContentCard>
  )
}
