import {createPortal} from 'react-dom'

const GlobalModal = (children) => {
  const domNode = window?.document.getElementById("modal");

  return (
    <div>
      {
        createPortal(children, domNode)
      }
    </div>
  )
}

export default GlobalModal