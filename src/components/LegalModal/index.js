import React, { useEffect, useContext } from 'react'
import { ModalContext } from 'context/legal-modal-context'
import clsx from 'clsx'
import Button from 'components/Button'
import styles from './styles.module.css'

function LegalModal({ legalCopy, buttonLabel, signUpCampaign, campLegal }) {

    const { openModal } = useContext(ModalContext)

    function escClose(e) {
        if (e.keyCode === 27 || e.code === 'Escape') {
            openModal({ open: false })
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            escClose(e)
        })

        return () => {
            document.removeEventListener('keyup', escClose, true)
        }

    }, [])

    return (
        <ModalContext.Consumer>
            {({ state, openModal }) => (
                <>
                    <div className={clsx(styles.background, state.open && styles.backgroundOpen)}></div>
                    <div className={clsx(styles.modal, state.open && styles.modalOpen)}>
                        <div className={styles.modalWrap}>
                            <button 
                                className={clsx(styles.closeButton, signUpCampaign && styles.closeCampaign)}
                                onClick={(e) => {
                                    openModal({ open: false })
                                    e.preventDefault()
                                }}>
                                    close
                            </button>
                            <p className={clsx(styles.legalText, signUpCampaign && styles.campaignCopy)}>{campLegal ? campLegal : legalCopy}</p>
                            <div className={styles.buttonWrap}>
                                <Button 
                                    href={state.link}
                                    text={buttonLabel}
                                    signUpCampaign={signUpCampaign}
                                    closeModal={() => openModal({ open: false })} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </ModalContext.Consumer>
    )
}

export default LegalModal