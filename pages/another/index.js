import Link from 'next/link'
import { Fragment } from 'react'

export default function Another() {
    return (
    <Fragment>
        <div>
            <h1>Another Hello!</h1>
            <Link href='/another/one'>Go back to other page inside anoher</Link>
        </div>
    </Fragment>
    )
  }