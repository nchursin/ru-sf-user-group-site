import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Calendar = () => {
    const data = useStaticQuery(graphql`
        query CalendarNameQuery {
            site {
                siteMetadata {
                    calendarName
                }
            }
        }
    `)

    return <div
        data-tockify-calendar={data.site.siteMetadata.calendarName}
        data-tockify-component="calendar"
        data-tockify-view="monthly"
    />
}

export default Calendar