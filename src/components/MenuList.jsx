import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'


function MenuList() {
    let url = 'https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/newresources'
    const {data: quizzes, isPending, error} = useFetch(url)
    
    
    return (
        <div>
        {isPending && <p>Loading...</p>}
        
        {error && <p>{error}</p> }

        <div className='manu-list'>
            {quizzes && 
                quizzes[0].resources.map((item)=> {
                    return (
                        <Link to={`/quiz/${item.title}`} className='menu-item' key={item.title}>
                            <figure style={{backgroundColor: item.color}}>
                                <img src={item.icon} alt={item.title} />
                            </figure>
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MenuList