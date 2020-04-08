import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useRouteMatch} from "react-router-dom";
function SearchOverView(props){
    let match = useRouteMatch("/search/overview/:title");
    console.log(match)
    let title = match.params.title
    let src
    let desc
    if(title ==='Exceeded Goal'){
        src = 'https://public.tableau.com/views/INTEX/Bestmostmoney?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc= 'Knowing what makes a GoFundMe campaign successful is crucial for getting the amount of donations required. Left is a visual description the shows the amount of donations received as well as the number of donors combined with amount of social media shares and campaign hearts. '
    }else if(title ==='In Need of Help'){
        src="https://public.tableau.com/views/INTEX/GoalxDaysActiveNeedHelp2?:showVizHome=no&embed=true&display_count=y&publish=yes&origin=viz_share_link"
        desc = 'There is a large number of GoFundMe campaigns that are currently open but have received little to no money. Left is visual description that shows how many days a campaign has been active by the amount of donations received.'
    }else if(title ==='Fastest to Success'){
        src='https://public.tableau.com/views/INTEX/FastesttoSuccess?:showVizHome=no&embed=true&display_count=y&publish=yes&:origin=viz_share_link'
        desc='Of particular importance is the speed at which a GoFundMe campaign reaches its goal. Left is a visual description of the campaigns that reached the declared goal or surpassed it.    '
    }else{
        src=''
    }
    return(
    <div>
        <h1>{title}</h1>
        <Container>
            <Row>
                <Col xs={3} className='text-left'>
                    <p>
                        {desc}
                    </p>
                </Col>
                <Col xs={9}>
                <iframe src={src} width="665" height="355">
                    
                </iframe>
                </Col>
            </Row>
        </Container>
    </div>    
    )
}
export default SearchOverView