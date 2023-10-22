import React, {useState}from 'react';
import useCustomCounter from '../Hooks/useCustomCounter';
import { ArrowUp, ArrowDown, RefreshCw} from 'react-feather';
import {Link} from 'react-router-dom';

import {useEffect} from 'react';

function CustomCounterPage() {
    
    const [count, increment, decrement, reset, setValue] = useCustomCounter();
    const[newCount, setNewCount] = useState('');
    const [hasError, setHasError] = useState(false);


    function handleOnChange (e){
        setNewCount(e.target.value);
        e.preventDefault ()
        // e.target.value = newCount;
    }
    function handleOnClick() {
        setValue(newCount);
        setNewCount("");
      }

    useEffect(() => {
        document.title = `Count: ${count}`;
      }, [count]);


      if(hasError) {
        throw new Error("Please try again");
    
        }
   

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <h2 style ={{
                fontSize: '30px',
            }}>{count}</h2>

            <div className="functional-btns">
                <button onClick={increment}>
                <ArrowUp />
                </button>
                <button onClick={reset}>
                <RefreshCw /></button>
                <button onClick={decrement}>
                
                <ArrowDown /></button> <br />
            </div>
            
            <div className="setval-error-btns">
                
                <br />
                 <div className="input">
                     <input value={newCount} type="number" onChange={handleOnChange}
                     style={{ width: '150px',
                     padding: '10px',
                     fontSize: '16px',
                     border: '2px solid #ddd',
                     borderRadius: '8px',
                     outline: 'none',
                      marginTop: '-30px'
                             }}/>
                 </div>
                <br />
                <button onClick={handleOnClick}
                style ={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    outline: 'none',
                    marginTop: '3px'
                
                }}>Set value</button>
                        
                    <button onClick={() => setHasError(true)}
                    
                    style ={{
                        width: '150px',
                 padding: '10px',
                 fontSize: '16px',
                 border: '2px solid #ddd',
                 borderRadius: '8px',
                 outline: 'none',
                  margin: '30px 0'
                    }}>Trigger error</button>
            </div>
                
    <Link to="/404-page" style={{
        textDecoration: 'none',
        color: 'black',
        fontSize: '15px',
        marginTop: '5px'
    
    }}>
        Click here to 404 page
        </Link>  
            
            
        </div>
    );
}

export default CustomCounterPage;