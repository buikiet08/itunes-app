import { useSelector } from "react-redux"

export const useMusic = () => useSelector(store => store.music)