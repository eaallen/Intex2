import React from 'react'
import {withFirebase} from '../Firebase'

const SignOutBtn = ({context}) => (
    <p onClick={context.doSignOut}>
        Sign Out
    </p>

)
export default withFirebase(SignOutBtn)