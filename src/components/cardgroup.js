import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Max from './images/formateurs/max.jpg'
import Marc from './images/formateurs/marc.jpg'
import Amre from './images/formateurs/amre.jpg'
import Jonathan from './images/formateurs/jonathan.jpg'

function Cardgroup() {
    return (
        <div>
        <h1 className="mt-4 font-weight-bold shadow-sm p-3 mb-5 bg-white rounded">Nos Formateurs</h1>
        <CardGroup className="mt-5" >

            <Card>
                <Card.Img className="marc-amre-jonathan-max-height" variant="top" src={ Marc } />
                <Card.Body>
                <Card.Title>Mr. Decombas</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img className="marc-amre-jonathan-max-height" variant="top" src={ Max } />
                <Card.Body>
                <Card.Title>Mr. Max</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img className="marc-amre-jonathan-max-height" variant="top" src={ Jonathan }/>
                <Card.Body>
                <Card.Title>Mr. Jonathan</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img className="marc-amre-jonathan-max-height" variant="top" src={ Amre } />
                <Card.Body>
                <Card.Title>Mr. Amré</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        </CardGroup>
        </div>
    )
}

export default Cardgroup;