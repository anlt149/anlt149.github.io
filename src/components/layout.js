import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath} className="flex flex-col">
      <div className="flex-none flex flex-row items-center bg-stone-100 h-16 font-serif w-full" >
        <div className="flex-1 wrapper">
          <Link className="pl-5 text-lg font-bold font-serif" to="/">
            {title}
            <span className="text-stone-500 animation-blink">|</span>
          </Link>
        </div>
      </div>

      <main className="flex-none global-wrapper">{children}</main>

      <div className="flex-1" />

      <footer className="flex-none flex flex-row justify-center items-center h-16 bg-stone-100 text-stone-500 text-sm font-serif">
        {/* Social */}
        <div className="flex-1 wrapper center-horizontal px-5 w-full">
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
