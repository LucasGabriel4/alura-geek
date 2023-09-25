import React from 'react'

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
   const [data, setData] = React.useState<T | null>(null)
   const [erro, setErro] = React.useState<string | null>(null)

   const optionsRef = React.useRef(options)
   optionsRef.current = options

   React.useEffect(() => {
      const controller = new AbortController()
      const {signal} = controller

      const fetchData = async () => {
         setData(null)
         try{
           const response = await fetch(url, {
            signal,
            ...optionsRef.current
           })
           if(!response.ok) throw new Error(`Error: ${response.status}`)
           const data = (await response.json()) as T
        if(!signal.aborted) setData(data)
         }
         catch(erro){
            if(!signal.aborted && erro instanceof Error) setErro(erro.message)

         }
      }

      fetchData()


      return () => {
        controller.abort()
      }
   },[url])

  return (
    {
        data,
        erro
    }
  )
}

export default useFetch
