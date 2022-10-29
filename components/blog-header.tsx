import { CMS_NAME, CMS_URL } from '../lib/constants'
import Logo from "../images/logo_samtpfoten.png"

export default function BlogHeader({ title }) {
  return (
    <section className="mt-16 mb-10 flex flex-col items-center md:mb-16 md:flex-row md:justify-between">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        {title}
      </h1>
     <img src={"../images/logo_samtpfoten.png"} width="100px" height="100px" />
    </section>
  )
}
