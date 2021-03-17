import React, { Component } from 'react'

export const modal = {
    open: false,
    link: 'https://tezos.com'
}

export const ModalContext = React.createContext(modal)

class ModalContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            link: 'https://tezos.com'
        }

        this.openModal = modalState => {
            this.setState(modalState)
        }
    }

    render() {
        const { state, openModal } = this
        const { children } = this.props
        return (
            <ModalContext.Provider value={{ state, openModal }}>
                {children}
            </ModalContext.Provider>
        )
    }
}

export default ModalContextProvider