import React from 'react'
import SignUpModalContext from 'context/newsletter-modal-context';
import LegalModalContext from 'context/legal-modal-context';
import NewsletterSignUpModal from 'components/NewsletterSignUpModal';
import LegalModal from 'components/LegalModal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function ModalsWrapper({ children }) {
    const { codeTranslations } = useDocusaurusContext();
    return (
        <SignUpModalContext>
            <LegalModalContext>

                <NewsletterSignUpModal 
                    title={codeTranslations["Sign Up Title"]}
                    description={codeTranslations["Sign Up Description"]}
                    placeholder={codeTranslations["Sign Up Placeholder"]}
                    button={codeTranslations["Sign Up Button"]}
                    thankYou={codeTranslations["Sign Up Thank You"]}
                    updateText={codeTranslations["Sign Up Update Text"]}
                    updateLinkText={codeTranslations["Sign Up Update Link Text"]}
                    />

                <LegalModal
                    legalCopy={codeTranslations["Legal Copy"]}
                    buttonLabel={codeTranslations["Legal Button"]} />

                    {children}

            </LegalModalContext>
        </SignUpModalContext>
    )
}

export default ModalsWrapper