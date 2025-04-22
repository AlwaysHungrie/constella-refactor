import ProjectInfo from "./zeroStates/projectInfo";
import RegisterAgentWallet from "./zeroStates/registerAgentWallet";

export default function MessageContainer() {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectInfo />
      <RegisterAgentWallet />
    </div>
  )
}
