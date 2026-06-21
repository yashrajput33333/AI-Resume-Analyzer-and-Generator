import { RouterProvider } from "react-router"
import router from "./app.routes.jsx"
import { createContext, useState } from "react"


const AuthContext = createContext()
const InterviewContext = createContext()

function App() {

  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  const [reports, setReports] = useState([])
  const [report, setReport] = useState(null)
  const [interviewLoading, setInterviewLoading] = useState(false)

  return (
    <AuthContext.Provider value={{ user, setUser, loading: authLoading, setLoading: setAuthLoading }} >
      <InterviewContext.Provider value={{ loading: interviewLoading, setLoading: setInterviewLoading, reports, setReports, report, setReport }} >
        <RouterProvider router={router} />
      </InterviewContext.Provider>
    </AuthContext.Provider>
  )
}

export { AuthContext, InterviewContext }
export default App
