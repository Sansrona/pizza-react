import React, {useState} from 'react'

function Categories({items}) {
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div className="categories">
              <ul>
                <li className={activeItem===null && 'active'} onClick={()=>setActiveItem(null)}>Все</li>
                {items && items.map((name, i)=>
                    <li className={activeItem===i ? 'active' : ''} onClick={()=>setActiveItem(i)} key={`${name}_${i}`}>{name}</li>
                )}                
              </ul>
            </div>
    )
}

export default Categories
