import {useRouter} from 'next/router'

function WeaponReview(){
    const router = useRouter()
    const { weaponId, reviewId } = router.query

    return (
        <h1>Weapon {weaponId} : Review {reviewId}</h1>
    )
}

export default WeaponReview