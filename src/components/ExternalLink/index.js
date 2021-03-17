import React from 'react'
import { ModalContext } from 'context/legal-modal-context'

function ExternalLink({ text, link, children }) {
    return (
        <ModalContext.Consumer>
            {({ openModal }) => (
              <a  
                href={link}
                target="_blank"
                onClick={(e) => {
                  if (link.slice(0, 5) !== 'mailto') {
                    e.preventDefault()
                    openModal({ open: true, link })
                  }
                }}>
                  {children ? children : text}
                </a>
            )}
          </ModalContext.Consumer>
    )
}

export default ExternalLink