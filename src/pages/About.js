import React, {useContext} from 'react'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Notes} from '../components/Notes'
import {Loader} from '../components/Loader'

export const About = () => {
  const {loading, notes, removeNote} = useContext(FirebaseContext)

  return (
    <div className="jumbotron">
      <div className="container">
        
        {loading
          ? <Loader />
          : <Notes notes={notes} onRemove={removeNote} />
        }

    </div>
  </div>
  )
}
  

  
