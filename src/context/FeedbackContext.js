// import { v4 as uuidv4 } from 'uuid'

import { createContext, useState, useEffect } from "react";

// import FeedbackData from '../data/FeedbackData'

const feedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    // const [feedback, setFeedback] = useState(FeedbackData)

    const[isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([ ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    useEffect(() => {
       fetchFeedback()
    }, [])

    //fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(newFeedback)
        })
        // newFeedback.id = uuidv4()

        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want t o delete?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updItem),
        })
    
        const data = await response.json()
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return <feedbackContext.Provider value={{
        // feedback: feedback
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </feedbackContext.Provider>
}

export default feedbackContext