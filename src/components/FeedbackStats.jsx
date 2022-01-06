import { useContext } from 'react';

// import PropTypes from 'prop-types'

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)
    //calculate ratings average

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')


    return (
        <div className="feedback-stats">
            <h4>
                {feedback.length} Reviews
            </h4>
            <h4>
                Average Rating: {isNaN(average) ? 0 : average}
            </h4>
        </div>
    )
}


// FeedbackStats.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             // id: PropTypes.string.isRequired,
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackStats