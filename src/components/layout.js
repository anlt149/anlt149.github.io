import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath} className="site-wrapper">
      {/* Header */}
      <div className="center-horizontal bg-stone-100 w-full h-16 font-serif">
        <div className="section-wrapper w-full" >
          <Link className="text-lg font-bold" to="/">
            {title}
            <span className="text-stone-500 animation-blink">▮</span>
          </Link>
        </div>
      </div>

      {/* Children */}
      <main className="flex-1 section-wrapper w-full">{children}</main>

      {/* Footer */}
      <footer className="flex-none flex flex-row justify-center items-center h-16 bg-stone-100 text-stone-500 text-sm font-serif">
        {/* Social */}
        <div className="flex-1 center-horizontal w-full section-wrapper">
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
