'use client'
import First from "@/components/product/First"
import Seconde from "@/components/product/Seconde"
import { useEffect, useState, use } from "react"

export default function Index({params}) {
  const { id } = use(params) 
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const GET_PRODUCT = async () => {
    try {
      
      const res = await fetch('/api/productbyId/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id  : Number(id[0])})
      })

      const data = await res.json()
      if (data.status !== 200) {
        console.error("Error:", data.message)
      } else {
        setProduct(data.product)
      }
    } catch (error) {
      console.error("Fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      GET_PRODUCT()
    }
  }, [id])
  return (
    <main className="flex flex-col md:flex-row px-5 sm:px-10 gap-8 w-full mt-10">
      {loading ? (
        <div className="h-[80vh] px-5 sm:px-10 flex justify-center items-center w-full">
        <p className="mb-0 text-lg">Loading ...</p>
      </div>
      ) : product ? (
        <>
          <First img={product.img} />
          <Seconde product={product} />
        </>
      ) : (
        <div>No product found</div>
      )}
    </main>
  )
}
