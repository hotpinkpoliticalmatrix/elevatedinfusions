import React from "react"
import renderer from "react-test-renderer"
import Layout, { PureLayout } from "../../components/layout"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Elevated Infusions Bakery`,
        },
      },
    })
  )
})

describe("PureLayout", () =>
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Elevated Infusions Bakery",
        },
      },
    }

    const tree = renderer.create(<PureLayout data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
