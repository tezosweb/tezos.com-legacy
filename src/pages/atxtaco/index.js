import React from 'react'
import { Redirect } from 'react-router-dom'
import NFTSignUp from 'components/campaign/NFTSignUp'

const AustinTaco = ({ history }) => <NFTSignUp history={history} city="Austin" />

export default function ATXRedirect() {
    return (
        <Redirect to='/discover' />
    )
};