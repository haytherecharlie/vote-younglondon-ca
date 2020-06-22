import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import json from 'config/default.json'
import { db } from 'services/firebase'

const useLanguage = () => {
  const dispatch = useDispatch()

  const electionActive = (start, end) => {
    const startDate = start.toDate()
    const endDate = end.toDate()
    const nowDate = new Date().getTime()
    return startDate <= nowDate && endDate >= nowDate
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      db().doc('election/2020').get().then(doc => {
          if (!doc.exists) return db().doc('election/2020').set(json)
          const data = doc.data()
          if (electionActive(data.startDate, data.endDate)) {
            dispatch({ type: 'ELECTION', data })
          }
        })
    }
  }, [])
}

export default useLanguage
