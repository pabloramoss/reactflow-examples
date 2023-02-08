import { ReactFlowProvider } from "reactflow"
import { Basic } from "./Basic"

const Examples: React.FC = () => {
  return (
    <ReactFlowProvider>
      <Basic />
    </ReactFlowProvider>
  )
  }
  export default Examples