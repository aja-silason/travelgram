import { ChangeEvent, useState } from "react"
import { images } from "../components/data"

export const useFilterData = () => {
    const [filteredImage, setFilterImage] = useState<string>('')

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {    
        setFilterImage(e.target.value)    
    }

    const imagesFiltered = images?.filter((image: any) => image?.name?.toLowerCase()?.includes(filteredImage?.toLowerCase()))

    return {
        handleSearch,
        filteredImage,
        imagesFiltered
    }
}