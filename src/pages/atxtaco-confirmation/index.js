import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpConfirm from 'components/campaign/SignUpConfirm'

const AustinTacoConfirm = () => <SignUpConfirm city="Austin" />

export default function ATXConfirmRedirect() {
    return (
        <Redirect to='/discover' />
    )
};