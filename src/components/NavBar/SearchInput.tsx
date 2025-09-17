"use client"
import queryString from 'query-string';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';
import { Input } from '../ui/input';


const SearchInput = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!searchText) return
    const url = queryString.stringifyUrl({
      url:"/search",
      query: {term: searchText}
    },{ skipEmptyString:true })
    router.push(url)
  }
const onClear = ()=>{
  setSearchText('')
  // router.push('/')

}
  return (
    <form onSubmit={onSubmit} className='relative w-full lg:w-[400px] flex items-center'>
      <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search' className=' border-none rounded-r-none focus-visible:ring-0 focus-within:ring-transparent
      focus-visible:ring-offset-0'/>
      {
        searchText && (
            <X className= ' absolute top-2.6 right-11 w-5 h-5 text-muted-foreground cursor-pointer hover:opacity-75 transition' onClick={onClear}/>
        )}
      
      <Button type='submit' variant="secondary" size="icon" className='rounded-l-none'>
        <Search className='w-5 h-5 text-muted-foreground'/>
      </Button>
    </form>
  )
}

export default SearchInput
