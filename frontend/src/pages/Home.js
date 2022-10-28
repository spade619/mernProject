import { useEffect, useState } from "react"

//components import
import WorkoutDetails from '../reusableComponents/WorkoutDetails'
import WorkoutForm from '../reusableComponents/WorkoutForm'


const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />

                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home