import {useRouter} from 'next/router'

function WeaponDetail(){
    const router = useRouter()
    const { weaponId } = router.query

    return (
        <h1>WeaponDetail {weaponId}</h1>
    )
}

export default WeaponDetail