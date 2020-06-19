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
    
    // data-tockify-calendar={data.site.siteMetadata.calendarName}
    return <div
        data-tockify-calendar="sf.community.ru"
        data-tockify-component="calendar"
        data-tockify-view="agenda"
    />
}

export default Calendar