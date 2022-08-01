import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Checkout Weapon!')
        router.push('/weapon')
    }

    return(
        <div>
            <h1>Home</h1>
            <Link href='/content'>
                <a>Content</a>
            </Link>
            <br/>
            <Link href='/weapon'>
                <a>Weapon</a>
            </Link>
            <br/>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Home