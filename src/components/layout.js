import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <Link className="header-link-home" to="/">
      {title}
      <span className="text-stone-500 animation-blink">|</span>
    </Link>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header p-2 bg-red-200">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `} An Le
      </footer>
    </div>
  )
}

export default Layout
