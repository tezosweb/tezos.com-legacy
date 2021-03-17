import React from 'react'
import SignUpModalContext from 'context/newsletter-modal-context';
import LegalModalContext from 'context/legal-modal-context';
import NewsletterSignUpModal from 'components/NewsletterSignUpModal';
import LegalModal from 'components/LegalModal'

function ModalsWrapper({ children }) {
    return (
        <SignUpModalContext>
            <LegalModalContext>
                <NewsletterSignUpModal />
                <LegalModal
                    legalCopy="You are now leaving Tezos.com. This link is 
                    being provided as a convenience and for informational purposes 
                    only; the provision of this link does not constitute an endorsement 
                    or an approval by TQ, and TQ is not liable for the content, functions, 
                    accuracy, legality, appropriateness, or any other aspect of such other 
                    websites, tools or resources."
                    buttonLabel="Continue" />
                    {children}
            </LegalModalContext>
        </SignUpModalContext>
    )
}

export default ModalsWrapper