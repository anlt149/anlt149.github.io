import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <div className="flex flext-row justify-start items-center bg-stone-100 h-16 font-serif" >
        <div className="flex-1 wrapper center-horizontal">
          <Link className="pl-5 text-lg font-bold font-serif" to="/">
            {title}
            <span className="text-stone-500 animation-blink">|</span>
          </Link>
        </div>
      </div>

      <main className="global-wrapper">{children}</main>
      <footer className="flex flex-row justify-center items-center h-16 bg-stone-100 text-stone-500 text-sm font-serif">
        {/* Social */}
        <div className="flex-1 wrapper center-horizontal px-5">
          <div >
            © {new Date().getFullYear()}
            {` `} An Le
          </div>
          <div className="flex-1"></div>

          {/* Rss */}
          <a href="/rss.xml" className="text-orange-500">RSS</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
