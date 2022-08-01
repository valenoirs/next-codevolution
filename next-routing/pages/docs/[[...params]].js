import { useRouter } from "next/router";

function Docs() {
    const router = useRouter()
    const { params = [] } = router.query

    if(params.length === 2) {
        return(
            <>
                <h2>Docs for {params[0]} concept {params[1]}</h2>
            </>
        )
    }

    if(params.length === 1) {
        return(
            <>
                <h2>Docs for {params[0]}</h2>
            </>
        )
    }

    return(
        <>
            <h1>Documentation Landing Page</h1>
        </>
    )
}

export default Docs