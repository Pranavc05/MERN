import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast"
const NoteDetailPage = () => {
  const[note, setNote] = useState(null)
  const[loading, setLoading] = useState(true)
  const[saving, setSaving] = useState(false)

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect = () => {
    const fetchNote = aysnc() =>{
      try {
        const res= await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log("Error in fetching note", error)
        toast.error("Failed to fetch the note")
      }
      fetchNote();
    }, [id]);
    console.log({ note });
    if(loading) {
      return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
          <LoaderIcon className= "animate-spin size-10"/>
        </div>
      )
    }
  
  return  (
  <div className="min-h-screen bg-base-200">
    <div className="container mx-auto px-4 py-8">

    </div>

  </div>
)
}

export default NoteDetailPage