import React from 'react'
import {Link} from 'react-router-dom'
///// we import the link from react route dom and us eit in line 13  note that the link is a capital letter
import './Useritem.css'
import Card from '../../shared/Components/UIElements/Card'
import Avatar from '../../shared/Components/UIElements/Avatar'
/// the props.image is where we stored the image in so we just call it here using props
//// we want to click a link that will take us to the place that the user visited in the form of places so we use the link router
//// the link router prevents the page from reloading by just routing through the route links provided
const Useritem = (props) => {
  return (
    <li className='user-item'>
        <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
            {/* the to is to specify the path that when clicked should send u we use backticks to be able to  inject values ie the unique users id  */}
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name}  />
                {/* <img src={props.image} alt={props.name}  />  we replace it with the Avatar compo as a prop and we expect img from that compo*/}
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.placeCount}  {props.placeCount === 0 ? 'place' : 'places'}</h3>
                {/* check if placeCount is === equal to zero then print place : or places . in this case placeCount is === to 3 so we print 3 places if its 0 we print 0 place/*/}
            </div>
          </Link>
        </Card>
    </li>
  )
}

export default Useritem