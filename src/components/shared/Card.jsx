// import {useState} from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
// function Card({item}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         // return 10
    //         return prev + 1
    //     })
    // }

    // return (
    //     <div className="card">
    //         {/* <div className="num-display">{rating}</div>
    //         <div className="text-display">{text}</div> */}
    //         <div className="num-display">{item.rating}</div>
    //         <div className="text-display">{item.text}</div>
    //         {/* <button onClick={handleClick}>Click</button> */}
    //     </div>
    // )

    //**********conditional class
    // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>


    //********conditional Style */
    return <div className="card" style = {{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : 'rgba(0,0,0,0.4',
    }}>{children}</div>

}

Card.defaultProps = {
    reverse: false,
}

Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card
