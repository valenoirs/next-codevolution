import Link from "next/link"

function Weapon(){
    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <br/>
            <Link href='/weapon/1'>
                <a>Weapon 1</a>
            </Link>
            <br/>
            <Link href='/weapon/2'>
                <a>Weapon 2</a>
            </Link>
            <br/>
            <Link href='/weapon/3' replace>
                <a>Weapon 3</a>
            </Link>
        </>
    )
}

export default Weapon