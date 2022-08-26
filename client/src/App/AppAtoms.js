import { atom } from 'recoil'

export const LoggedInAtom = atom({
    key: 'LogedInAtom',
    default: false
})

export const UserIdAtom = atom({
    key: 'UserIdAtom',
    default: ''
})