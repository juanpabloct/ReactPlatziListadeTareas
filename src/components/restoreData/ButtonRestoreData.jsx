export function ButtonRestoreData() {
    return <button onClick={()=>{

        localStorage.clear()
        window.location.reload()
    }
    }>
        Restore Data
    </button>
    
}