import { useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';


// import PropTypes from 'prop-types'

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // )

    return (
        <div className="feedback-list">
            <AnimatePresence></AnimatePresence>
            {feedback.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </div>
    )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             // id: PropTypes.string.isRequired,
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList
