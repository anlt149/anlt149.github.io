import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const [activeTag, setActiveTag] = React.useState(null)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.page.tags

  const toggleActive = tagName => {
    setActiveTag(tagName)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="" />
      {/* <ul>
        {routes.map(r => {
          return <li id={r.href}>
            <Link to={r.href}>{r.text}</Link>
          </li>
        })}
      </ul> */}

      <ol className="">
        {tags.map(tag => {
          return (
            <li key={tag.name}>
              <h3
                className={`font-bold text-xl uppercase mt-8 mb-4`}
                id={tag.name}
              >
                <Link
                  to={`#${tag.name}`}
                  itemProp="url"
                  className={`pt-1 ${activeTag === tag.name && "targetClass"
                    }`}
                  onClick={() => toggleActive(tag.name)}
                >
                  {tag.name}
                  <span>({tag.postCount})</span>
                </Link>
              </h3>
              {/* Posts */}
              <ul>
                {tag.posts?.map(item => {
                  const post = item.post
                  return (
                    <li key={post.id} className="last:mb-4">
                      <div className="flex flex-row leading-8">
                        <p className="mr-5 text-gray-400">{post.detail.date}</p>
                        <Link
                          to={post.fields.slug}
                          itemProp="url"
                          className={`font-medium`}
                        >
                          {post.detail.title}
                        </Link>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        routes {
          href
          text
        }
      }
    }
    page: allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        name: fieldValue
        postCount: totalCount
        posts: edges {
          post: node {
            id
            detail: frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
