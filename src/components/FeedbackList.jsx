import { useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }

    return isLoading ? <Spinner /> :
        <div className="feedback-list">
            <AnimatePresence></AnimatePresence>
            {feedback.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </div>

}

export default FeedbackList

