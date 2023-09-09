import {useState} from 'react'
import Title from './Title'
import items from './data';
import Menu from './menu';
import Categories from './Categories';



const allCatergories=['all',...new Set(items.map((item)=>item.category))]
function App() {  
 const [menuItems, setmenuItems]= useState(items);
 const [categories, setCategories]=useState(allCatergories)

  const filterItems=(category)=>{
    if(category === 'all'){
      setmenuItems(items);
      return;
    }
    const newItems= items.filter((item)=> item.category===category)
    setmenuItems(newItems)
  }
 return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
        


      </section>
    </main>
  )
}

export default App
