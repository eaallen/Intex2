import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useRouteMatch} from "react-router-dom";
function SearchOverView(props){
    let match = useRouteMatch("/search/overview/:title");
    let title = match.params.title
    let src
    let desc
    if(title ==='Exceeded Goal'){
        src = 'https://public.tableau.com/views/INTEX/Bestmostmoney?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc= 'Knowing what makes a GoFundMe campaign successful is crucial for getting the amount of donations required. Above is a visual description the shows the amount of donations received as well as the number of donors combined with amount of social media shares and campaign hearts. '
    }else if(title ==='In Need of Help'){
        src="https://public.tableau.com/views/INTEX/InNeedofHelp?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link"
        desc = 'There is a large number of GoFundMe campaigns that are currently open but have received little to no money. Above is visual description that shows how many days a campaign has been active by the amount of donations received.'
    }else if(title ==='Fastest to Success'){
        src='https://public.tableau.com/views/INTEX/FastesttoSuccess?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc='Of particular importance is the speed at which a GoFundMe campaign reaches its goal. Above is a visual description of the campaigns that reached the declared goal or surpassed it.'
    }else if(title ==='Failed Attempts'){
        src='https://public.tableau.com/views/INTEX/FailedAttempts?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc='There are a few GoFundMe Campaigns that do not get the traction that they need, are the campaigns are suspended before reaching its goal.' + 
        'Above is a visual description of the campaigns that were suspended before reaching their goals. Only campaign_id 39375174 is avaliable to view at this time.'
    }
    else {
        src='https://public.tableau.com/views/INTEX/Overall?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc='Explore the data with many options on the left. Social media shares will display campaigns with the most shares. \n\nMost money raised is self explanatory.' +
        '\n\nThose campaigns which have pulled in more money than the goal amount are shown in Surpassed Goal. \n\nCampaign hearts are similar to "likes" on Facebook or Instagram.' +
        '\n\nViewing and Writing Custom SQL are for SQL-experienced users.'
    }
    return(
    <div>
        <h1>{title}</h1>
        <Container>
            <Row className="text-center">
                <Col className="text-center">
                    <Row className="text-center">
                        <Col>
                        </Col>
                        <Col>
                            <iframe title='iframeyeet' frameBorder="0" src={src} width="665" height="355" scrolling='no'>
                            </iframe>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            <br></br>{desc}
                        </p>
                    </Row>
                </Col>
                {/* <Col xs={9}>
                
                </Col> */}
            </Row>
        </Container>
    </div>    
    )
}
export default SearchOverView